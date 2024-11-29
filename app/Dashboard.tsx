import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NoticeBoard } from "../components/Dashboard/NoticeBoard";
import { PerformanceMetrics } from "../components/Dashboard/PerformanceMetrics";
import { QuickActions } from "../components/Dashboard/QuickActions";
import { RecentActivities } from "../components/Dashboard/RecentActivities";
import { TaskList } from "../components/Dashboard/TaskList";

const Dashboard: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>ERP Dashboard</Text>

      <QuickActions />

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Notice Board</Text>
        <NoticeBoard />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Tasks</Text>
        <TaskList />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Performance Metrics</Text>
        <PerformanceMetrics />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Recent Activities</Text>
        <RecentActivities />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
    backgroundColor: "#3498db",
    color: "#ffffff",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
