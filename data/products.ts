import { Product } from "@/types/products";

export const products: Product[] = [
  {
    id: 1,
    name: "Notion",
    slug: "notion",
    image: "/images/product1.png",
    keyFeatures: ["All-in-one workspace", "Customizable templates"],
    description:
      "Notion is an all-in-one workspace where you can write, plan, collaborate and get organized. It allows you to take notes, add tasks, manage projects & more.",
    features: [
      "Note-taking with rich formatting",
      "Task management and to-do lists",
      "Database functionality with custom properties",
      "Collaborative workspace for teams",
      "Customizable templates for any workflow",
      "Integrations with popular tools",
    ],
    cta: "Try Notion for free",
  },
  {
    id: 2,
    name: "Todoist",
    slug: "todoist",
    image: "/images/product2.png",
    keyFeatures: ["Task management", "Cross-platform"],
    description:
      "Todoist is a task management application that helps you organize and prioritize your tasks across all your devices. Stay focused and never miss a deadline.",
    features: [
      "Intuitive task creation and management",
      "Project organization and categorization",
      "Priority levels and due dates",
      "Recurring tasks for habits",
      "Cross-platform synchronization",
      "Collaboration features for teams",
    ],
    cta: "Start organizing today",
  },
  {
    id: 3,
    name: "Slack",
    slug: "slack",
    image: "/images/product3.png",
    keyFeatures: ["Team communication", "App integrations"],
    description:
      "Slack is a messaging app for business that connects people to the information they need. By bringing people together to work as one unified team, Slack transforms the way organizations communicate.",
    features: [
      "Organized conversations in channels",
      "Direct messaging and group chats",
      "File sharing and collaboration",
      "Voice and video calls",
      "Powerful search functionality",
      "Integration with over 2,000 apps",
    ],
    cta: "Join the conversation",
  },
  {
    id: 4,
    name: "Trello",
    slug: "trello",
    image: "/images/product4.png",
    keyFeatures: ["Visual project management", "Kanban boards"],
    description:
      "Trello is a visual tool that empowers your team to manage any type of project, workflow, or task tracking. Add files, checklists, or even automate your work with Power-Ups.",
    features: [
      "Intuitive drag-and-drop interface",
      "Customizable kanban boards",
      "Task cards with attachments and comments",
      "Checklists and due dates",
      "Team collaboration features",
      "Workflow automation options",
    ],
    cta: "Get started with Trello",
  },
  {
    id: 5,
    name: "Asana",
    slug: "asana",
    image: "/images/product5.png",
    keyFeatures: ["Work management", "Team coordination"],
    description:
      "Asana helps teams orchestrate their work, from daily tasks to strategic initiatives. With Asana, teams are more confident, move faster, and accomplish more with less—no matter where they are located.",
    features: [
      "Project and task tracking",
      "Multiple project views (list, board, timeline)",
      "Goal setting and progress tracking",
      "Team workload management",
      "Automation of repetitive tasks",
      "Reporting and insights",
    ],
    cta: "Boost your productivity",
  },
];
