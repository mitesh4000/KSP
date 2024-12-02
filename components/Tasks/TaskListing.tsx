import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ITask } from "../../types/types_Task";
import TaskCard from "./TaskCard";

interface TaskListingProps {
  tasks: ITask[];
}

const TaskListing: React.FC<TaskListingProps> = ({ tasks }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard task={item} />}
        keyExtractor={(item) => item.taskName}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 2,
  },
});

export default TaskListing;
