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


## Project

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

![alt text](/Images/16)

# YouTrack Project Setup Guide

A step-by-step guide to setting up your YouTrack project with teammates, workflows, fields, time tracking, reports, dashboards, and integrations.

---

## Create a New Project

1. Go to **Projects → Create Project**  
2. Fill in your project details (name, key, description, etc.)

---

## Add Teammates

You can add team members in two ways:

### Option 1 — During Project Creation
- Add teammates directly under the **Team** section.

### Option 2 — Later
- Go to **Administration → Projects → [Your Project] → Team**
- Click **Add User** and assign a role.

---

## Access Control

### Create Roles
- Navigate to **Administration → Roles**
- Click **New Role**
- Define what permissions the role will have (e.g., Read Issues, Update Issues, Create Issues)

### Define Capabilities
Each role defines what users can do in the project — such as editing fields, changing states, or managing sprints.

---

## Auth Modules
Configure authentication under **Administration → Auth Modules**.

You can integrate:
- JetBrains Hub  
- Google / GitHub OAuth  
- Local YouTrack accounts  

---

## Workflows

Workflows automate project logic — for example, starting timers, assigning issues, or updating states.

### Create a Workflow
1. Go to **Administration → Workflows**
2. Click **New Workflow**
3. Choose **Constructor**
4. Define triggers, conditions, and actions.

### Attach Workflow to Projects
Once your workflow is ready:
1. Go to **Administration → Workflows**
2. Select your workflow
3. Click **Manage Projects**
4. Attach the workflow to the desired project(s)

---

## 🧩 Custom Fields

Custom fields define structured data for your issues (e.g., *Priority*, *RUP Workflow*, *Phase*).

### Add a Custom Field
1. Go to **Administration → Projects → [Your Project] → Fields**
2. Click **Add Field**
3. Define:
   - **Field Name**
   - **Type** (e.g., `enum`, `string`, or `integer`)
   - **Aliases** (optional)
4. After creating, define your **set of values** and edit as needed.

Now, if you open an issue, you’ll see your new field visible on the issue card.

---

## Time Tracking

### Enable Time Tracking
1. Turn on the **Time Tracking** field in your project.
2. Go to **Administration → Workflows**
3. If you see a “requires setup” message next to *In Progress Work Timer*, click it and then **Apply fixes**.

✅ Once configured:
- Moving a card to **In Progress** starts a timer  
- Moving it to **Verify** or **Done** stops it  
- Check the issue’s **History** to see tracked time

---

## Reports

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

**Example:**  
Cumulative Flow Report — shows how issues progress through RUP phases over time.

---

## Overviews

### 1️⃣ Dashboard
- Gives a project-wide overview.
- You can **add widgets** and **share dashboards** with other users or teams.

### List View
- Displays all issues, stories, and subtasks in a detailed list.

### Agile Board
- Visual workflow representation using columns and swimlanes.

---

## Agile Board Setup

### Sprints
- Sprints usually last **1–4 weeks**.
- To create a new sprint:
  - Click your current sprint → **New Sprint**
- Use RUP naming convention:
  - Example: `Inception#1`, `Elaboration#1`, `Elaboration#2`, etc.

---

### Swimlanes
Swimlanes group related issues horizontally by:
- Assignee  
- Custom field (e.g., Workflow or Phase)  
- Priority  
- Issue type (e.g., Bugs, Features)

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

---

### Creating a New Card
To create a new issue/card:
- Click **“New Card”** in any swimlane  
- Fill in the title, description, and other details  

If your workflow includes automation:
- The card will auto-assign you
- Time tracking starts automatically when moved to *In Progress*
- The issue history updates automatically

---

## Integrations

### GitHub Integration
1. Go to **Administration → Integrations → VCS Integration**
2. Choose **GitHub Server**
3. Connect your GitHub repository
4. Commits mentioning issue IDs (e.g., `#MIN-12`) will appear under the related issue automatically.

---

### VS Code Integration
1. Install the **YouTrack** extension in VS Code
2. Configure your `.vscode/settings.json`:
   ```json
   {
     "youtrack.userName": "your-username",
     "youtrack.password": "your-permanent-token",
     "youtrack.host": "https://yourproject.youtrack.cloud",
     "youtrack.filter": "(assigned to: me) and #Unresolved"
   }


---

