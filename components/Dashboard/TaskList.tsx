import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

type Task = {
  id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
};

const tasks: Task[] = [
  { id: '1', title: 'Review Q2 Reports', status: 'pending' },
  { id: '2', title: 'Update Client Presentation', status: 'in-progress' },
  { id: '3', title: 'Schedule Team Building', status: 'completed' },
  { id: '4', title: 'Prepare Monthly Newsletter', status: 'pending' },
];

export const TaskList: React.FC = () => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.taskItem}>
          <Text style={styles.taskTitle}>{item.title}</Text>
          <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(item.status) }]} />
        </TouchableOpacity>
      )}
    />
  );
};

const getStatusColor = (status: Task['status']) => {
  switch (status) {
    case 'pending':
      return '#ffa500';
    case 'in-progress':
      return '#3498db';
    case 'completed':
      return '#2ecc71';
    default:
      return '#999';
  }
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#3498db',
  },
  taskTitle: {
    fontSize: 16,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

