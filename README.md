# YouTrack - Beginner Guideline
## Table of contents
- [Project Setup](#1-project-setup)
    - [Create a New Project](#11-create-a-new-project)
    - [Add Teammates](#12-add-teammates)
    - [Access Control](#13-access-control)
    - [Auth Modules](#14-auth-modules)
- [Workflows](#2-workflows)
    - [Create Workflow](#21-create-workflow)
    - [Attach Workflow to Projects](#22-attach-workflow-to-projects)
- [Custom Fields](#3-custom-fields)
    - [Add Custom Fields](#31-add-custom-fields)
    - [RUP Workflow and Phase Fields](#32-rup-workflow-and-phase-fields)
- [Time Tracking](#4-time-tracking)
    - [Enable Time Tracking](#41-enable-time-tracking)
    - [Automatic Timers](#42-automatic-timers)
- [Reports and Overviews](#5-reports-and-overviews)
    - [Create Reports](#51-create-reports)
    - [Dashboard Overview](#52-dashboard-overview)
    - [List View](#53-list-view)
    - [Agile Board Overview](#54-agile-board-overview)
- [Agile Board](#6-agile-board)
    - [Sprints](#61-sprints)
    - [Swimlanes](#62-swimlanes)
    - [Board Settings](#63-board-settings)
    - [Creating New Cards](#64-creating-new-cards)
- [Integrations](#7-integrations)
    - [GitHub Integration](#71-github-integration)
    - [VS Code Integration](#72-vs-code-integration)
- [Final Result](#8-final-result)


# YouTrack Project Setup Guide

A step-by-step guide to setting up your YouTrack project with teammates, workflows, fields, time tracking, reports, dashboards, and integrations.

### Create a Project
If you want to create a project, go to:  
**Projects → Create Project**

Now you can:
- Name your project  
- Assign a unique **Project ID**  
- Choose a **template** (Agile, Scrum, Kanban, etc.)  
- Add a **description**

> Example:  
> Project Name: *Test App*  
> ID: *TA*  
> Type: *Agile Software Development*  
> Description: *A test application.*

![alt text](/Images/16.png)

---

## Add Teammates

YouTrack is a great platform for working with teams. You can invite anyone with a YouTrack Account to your project. To do this, you need to go to the project settings. You can find it when you click on your project in the projects tab. You can add team members in two ways:

### Option 1 — During Project Creation
- Add teammates directly under the **Team** section.
![alt text](/Images/0.png)

### Option 2 — Later
- Go to **Administration → Projects → [Your Project] → Team**
- Click **Add User** and assign a role.
![alt text](/Images/17.png)

---

## Access Control

 On the Access page in Project Settings, you can view the roles assigned to users and groups within the project. To create a new role, follow these steps.

### Create Roles
- Navigate to **Administration → Roles**
- Click **New Role**
- Define what permissions the role will have (e.g., Read Issues, Update Issues, Create Issues)
![alt text](/Images/17.png)

### Define Capabilities
Each role defines what users can do in the project — such as editing fields, changing states, or managing sprints.
If you want to know more about the roles you can go to the administration settings of the youtrack server. 
- Go to Access Management -> Roles.
![alt text](/Images/5.png)

---

## Auth Modules
It lets users log in to YouTrack with an account that is managed in the respective authentication service.
Filter the list of modules by various attributes, including name, status (if it is enabled or not), and user accounts.

Configure authentication under **Administration → Auth Modules**.

You can integrate:
- JetBrains Hub  
- Google / GitHub OAuth  
- Local YouTrack accounts  
![alt text](/Images/19.png)

---

## Workflows

Workflows automate project logic — for example, starting timers, assigning issues, or updating states. This means you don’t have to do the same work over and over again.

### Create a Workflow
There are two ways to create a workflow
- Go to **Administration → Workflows**
- Click **New Workflow**
  
Now there are two ways to create a workflow

#### Using a constructor
i- Choose **Constructor**
ii- Define triggers, conditions, and actions.
![alt text](/Images/11.png)

#### Using JavaScript Editor
i- Choose **Javascript Editor**
ii- Write the conditions.
You can find the code here: [View main file → Automate_blogpost.js](./Automate_blogpost.js)

### Attach Workflow to Projects
Once your workflow is ready:
1. Go to **Administration → Workflows**
2. Select your workflow
3. Click **Manage Projects**
4. Attach the workflow to the desired project(s)
![alt text](/Images/14.png)
---

## Custom Fields

Custom fields define structured data for your issues (e.g., *Priority*, *RUP Workflow*, *Phase*).

### Add a Custom Field
1. Go to **Administration → Projects → [Your Project] → Fields**
2. Click **Add Field**
![alt text](/Images/21.png)   
3. Define:
   - **Field Name**
   - **Type** (e.g., `enum`, `string`, or `integer`)
   - **Aliases** (optional)
4. After creating, define your **set of values** and edit as needed.
![alt text](/Images/22.png)  

Now, if you open an issue, you’ll see your new field visible on the issue card.
![alt text](/Images/23.png)

---

## Time Tracking
Before you go to the Agile board(s) of your project, I suggest turning on time tracking. This feature helps you automatically track how long a task or card is in progress. 

### Enable Time Tracking
1. Turn on the **Time Tracking** field in your project.
![alt text](/Images/24.png)

3. Go to **Administration → Workflows**
4. If you see a “requires setup” message next to *In Progress Work Timer*, click it and then **Apply fixes**.
![alt text](/Images/25.png)

✅ Once configured:
- Moving a card to **In Progress** starts a timer  
- Moving it to **Verify** or **Done** stops it  
- Check the issue’s **History** to see tracked time

---

## Reports
To create a report, just click on "Reports." You’ll see different types of reports you can choose from. For example, you can select a burndown chart or cumulative report as one of the options.
To create a report:

1. Go to **Reports**
2. Click **+ New Report**
3. Choose a report type (e.g., *Cumulative Flow*)
4. Fill in:
   - Name  
   - Project  
   - Period of time  
   - Report type  
   - Access permissions
![alt text](/Images/26.png)
**Example:**  
Cumulative Flow Report — shows how issues progress through RUP phases over time.
![alt text](/Images/27.png)

---

## Overviews

### 1️⃣ Dashboard
- Gives a project-wide overview.
- You can **add widgets** and **share dashboards** with other users or teams.
![alt text](/Images/28.png)

### List View
- Displays all issues, stories, and subtasks in a detailed list.
![alt text](/Images/30.png)

### Agile Board
- Visual workflow representation using columns and swimlanes.Here you see a quick overview over an agile board.
![alt text](/Images/1.png)

---

## Agile Board Setup

### Sprints
- Sprints usually last **1–4 weeks**.
- To create a new sprint:
  - Click your current sprint → **New Sprint**
- Use RUP naming convention:
  - Example: `Inception#1`, `Elaboration#1`, `Elaboration#2`, etc.
![alt text](/Images/33.png)

---

### Swimlanes
Swimlanes group related issues horizontally by:
- Assignee  
- Custom field (e.g., Workflow or Phase)  
- Priority  
- Issue type (e.g., Bugs, Features)
![alt text](/Images/45.png)

Use them to:
- Organize work by member  
- Separate different types of tasks  
- Prioritize visually

---

### Board Settings
Make sure your board reflects your workflow correctly:

- Map **States** to columns (e.g., Open → In Progress → Done)
- Add visible fields under **Card Settings**, such as:
  - Assignee  
  - Estimated Time  
  - Workflow  
  - Phase  
  - Tags  
![alt text](/Images/36.png)

---

### Creating a New Card
To create a new issue/card:
- Click **“New Card”** in any swimlane  
- Fill in the title, description, and other details
![alt text](/Images/37.png)

If your workflow includes automation:
- The card will auto-assign you
- Time tracking starts automatically when moved to *In Progress*
- The issue history updates automatically
As we did those things, we can see them here, including the time tracking, in-progress timer, auto assign, and updated description.

---

## 7. Smart Search

### 7.1 Overview
Smart Search is YouTrack’s built-in **query-based filter system** that lets you find issues quickly using simple, keyword-style commands in the **top search bar**.  
It works like Google Search — you type your query, and YouTrack instantly filters the issue list.

![alt text](/Images/search.png)

---

### 7.2 Where to Use It
1. Open your project → **Issues** page.  
2. Click in the **search bar at the top**.  
3. Type your query (YouTrack suggests fields and values).  
4. Press **Enter** → matching issues appear immediately.

You can also apply filters manually from the left sidebar — YouTrack automatically builds the same Smart Search query for you.

---

### 7.3 Example Queries

| Query | Description |
|--------|--------------|
| `#MIN` | All issues in the **MindHaven** project *(replace MIN with your project key)* |
| `project: MindHaven` | All issues in MindHaven project (using full name) |
| `Assignee: me State: Open` | All open issues assigned to you |
| `State: {Done}` | Issues whose state is Done |
| `#MIN summary: "Blog Post" `|  All blog-related tasks this week |
---
![alt text](/Images/mhblog.png)

### 7.4 Why It’s Called “Smart”
- Autocompletes projects, users, and fields as you type.  
- Understands partial matches (e.g., `prio: high` → “High Priority”).  
- Supports natural time ranges (`updated: today`, `created: last week`).  
- Integrates with custom fields unique to your project.  
- Works inside dashboards, reports, and saved searches.

---


## Integrations

### GitHub Integration
1. Go to **Administration → Integrations → VCS Integration**
2. Choose **GitHub Server**
![alt text](/Images/vc.png)

4. Connect your GitHub repository by adding the link to it. You can only create the repositories you have created yourself.
5. Now it will ask you to create a token, which you can easily do if you click on "generate a token".
6. Commits mentioning issue IDs (e.g., `#MIN-12`) will appear under the related issue automatically.
![alt text](/Images/git.png)

---

### VS Code Integration
1. Install the **YouTrack** extension in VS Code
2. Configure your extension using your YouTrack user name and a token you generate in YouTrack.
3. You should now be able to look at the issues in your VS Code. 
![alt text](/Images/vscode.png)

---

