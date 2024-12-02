export interface ITask {
  taskName: string;
  description: string;
  priority: string;
  status: string;
  dueDate: Date;
  assignedTo: {
    user: string;
    assignedAt: Date;
  }[];
  dependencies: string[];
  tags: string[];
  attachments: string[];
}

export var taskData: ITask[] = [
  {
    taskName: "Project Kickoff Meeting",
    description: "Meeting to discuss project goals and objectives",
    priority: "moderate",
    status: "not started",
    dueDate: new Date("2023-04-01"),
    assignedTo: [
      {
        user: "user1",
        assignedAt: new Date("2023-03-25"),
      },
      {
        user: "user2",
        assignedAt: new Date("2023-03-25"),
      },
    ],
    dependencies: [],
    tags: ["project", "meeting"],
    attachments: [],
  },
  {
    taskName: "Code Review",
    description: "Review and provide feedback on recent code changes",
    priority: "high",
    status: "in progress",
    dueDate: new Date("2023-03-31"),
    assignedTo: [
      {
        user: "user3",
        assignedAt: new Date("2023-03-23"),
      },
    ],
    dependencies: ["task1"],
    tags: ["code", "review"],
    attachments: [],
  },
  {
    taskName: "Submit Quarterly Report",
    description: "Compile and submit quarterly report to management",
    priority: "urgent",
    status: "not started",
    dueDate: new Date("2023-04-15"),
    assignedTo: [
      {
        user: "user4",
        assignedAt: new Date("2023-03-28"),
      },
    ],
    dependencies: ["task2"],
    tags: ["report", "quarterly"],
    attachments: [],
  },
];
