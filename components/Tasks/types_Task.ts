export interface IUser {
  user: string;
  assignedAt: Date;
}

export interface ITask {
  taskName: string;
  description: string;
  priority: "urgent" | "high" | "moderate" | "low";
  status: "not started" | "in progress" | "completed";
  dueDate: Date;
  assignedTo: IUser[];
  dependencies: string[];
  tags: string[];
  attachments: string[];
}

