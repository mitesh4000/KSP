import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type QuickAction = {
  id: string;
  title: string;
  icon: string;
  onPress: () => void;
};

const quickActions: QuickAction[] = [
  { id: '1', title: 'New Task', icon: 'add-task', onPress: () => console.log('New Task') },
  { id: '2', title: 'Messages', icon: 'message', onPress: () => console.log('Messages') },
  { id: '3', title: 'Calendar', icon: 'event', onPress: () => console.log('Calendar') },
  { id: '4', title: 'Reports', icon: 'bar-chart', onPress: () => console.log('Reports') },
];

export const QuickActions: React.FC = () => {
  return (
    <View style={styles.container}>
      {quickActions.map((action) => (
        <TouchableOpacity key={action.id} style={styles.actionButton} onPress={action.onPress}>
          <Icon name={action.icon} size={24} color="#fff" />
          <Text style={styles.actionText}>{action.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#3498db',
  },
  actionText: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
  },
});

