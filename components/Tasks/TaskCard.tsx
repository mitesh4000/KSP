import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ITask } from "../../types/types_Task";

interface TaskCardProps {
  task: ITask;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const priorityColors = {
    urgent: "#FF4136",
    high: "#FF851B",
    moderate: "#FFDC00",
    low: "#2ECC40",
  };

  const statusColors = {
    "not started": "#AAAAAA",
    "in progress": "#39CCCC",
    completed: "#01FF70",
  };

  return (
    <View style={styles.card}>
      <Text style={styles.taskName}>{task.taskName}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <View style={styles.detailsContainer}>
        <View
          style={[
            styles.badge,
            { backgroundColor: priorityColors[task.priority] },
          ]}
        >
          <Text style={styles.badgeText}>{task.priority}</Text>
        </View>
        <View
          style={[styles.badge, { backgroundColor: statusColors[task.status] }]}
        >
          <Text style={styles.badgeText}>{task.status}</Text>
        </View>
      </View>
      <Text style={styles.dueDate}>
        Due: {task.dueDate.toLocaleDateString()}
      </Text>
      <View style={styles.tagsContainer}>
        {task.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.assignedTo}>
        Assigned to: {task.assignedTo.map((user) => user.user).join(", ")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 10,
    width: "auto",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  taskName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  detailsContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  dueDate: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  tag: {
    backgroundColor: "#E1E1E1",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 10,
    color: "#333",
  },
  assignedTo: {
    fontSize: 12,
    color: "#888",
  },
});

export default TaskCard;
