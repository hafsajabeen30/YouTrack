const entities = require('@jetbrains/youtrack-scripting-api/entities');

exports.rule = entities.Issue.onChange({
  title: "Auto-assign Blog Posts, add link, and notify",

  // Trigger when a new issue is reported
  guard: (ctx) => {
    return ctx.issue.isReported;
  },

  action: (ctx) => {
    const issue = ctx.issue;

    // Check for "Blog Post" in summary or description
    const text = ((issue.summary || "") + " " + (issue.description || "")).toLowerCase();
    if (!text.includes("blog post")) {
      return;
    }

    // 1️⃣ Assign to specific user
    const assigneeLogin = "David.Lhmn"; // change this to the actual YouTrack login
    const assignee = ctx.Users.findByLogin(assigneeLogin);
    if (assignee) {
      issue.fields.Assignee = assignee;
    }

    // 2️⃣ Append the article link to description
    const link = "https://mindhavenapp-kunpy.wordpress.com/";
    const line = "Article link: " + link;
    const current = issue.description || "";
    if (!current.includes(link)) {
      issue.description = current ? current + "\n\n" + line : line;
    }

    // 3️⃣ Mention assignee to notify
    if (assignee) {
      issue.addComment("ARTICLE ALERT: @" + assignee.login + " you have a new blog task this week.");
    }
  },

  // Optional metadata: ensures it only runs for specific projects (good practice)
  requirements: {
    Assignee: {
      type: entities.User.fieldType
    }
  }
});
