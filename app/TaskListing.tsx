import TaskCard from "@/components/Tasks/TaskCard";
import { taskData } from "@/data/dummyData";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export const TaskList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter a new task" />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={taskData}
        renderItem={({ item }) => <TaskCard task={item} />}
        keyExtractor={(item) => item.taskName}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 2,
        }}
      />
    </View>
  );
};
export default TaskList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  task: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  completedTask: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
  completedTaskText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});
