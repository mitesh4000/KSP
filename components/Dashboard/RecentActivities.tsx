import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Activity = {
  id: string;
  title: string;
  description: string;
  icon: string;
  timestamp: string;
};

const activities: Activity[] = [
  { id: '1', title: 'New Order', description: 'Order #1234 received', icon: 'shopping-cart', timestamp: '2 hours ago' },
  { id: '2', title: 'Task Completed', description: 'Project X milestone achieved', icon: 'check-circle', timestamp: '4 hours ago' },
  { id: '3', title: 'New Employee', description: 'John Doe joined the team', icon: 'person-add', timestamp: 'Yesterday' },
  { id: '4', title: 'System Update', description: 'ERP system updated to v2.1', icon: 'system-update', timestamp: '2 days ago' },
];

export const RecentActivities: React.FC = () => {
  return (
    <FlatList
      data={activities}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.activityItem}>
          <Icon name={item.icon} size={24} color="#3498db" style={styles.activityIcon} />
          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>{item.title}</Text>
            <Text style={styles.activityDescription}>{item.description}</Text>
            <Text style={styles.activityTimestamp}>{item.timestamp}</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  activityIcon: {
    marginRight: 10,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  activityTimestamp: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
});

