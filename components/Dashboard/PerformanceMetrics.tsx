import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Metric = {
  id: string;
  title: string;
  value: string;
  change: number;
};

const metrics: Metric[] = [
  { id: '1', title: 'Revenue', value: '$125,430', change: 5.2 },
  { id: '2', title: 'Expenses', value: '$84,210', change: -2.1 },
  { id: '3', title: 'Profit', value: '$41,220', change: 8.7 },
  { id: '4', title: 'Customer Satisfaction', value: '92%', change: 1.5 },
];

export const PerformanceMetrics: React.FC = () => {
  return (
    <View style={styles.container}>
      {metrics.map((metric) => (
        <View key={metric.id} style={styles.metricItem}>
          <Text style={styles.metricTitle}>{metric.title}</Text>
          <Text style={styles.metricValue}>{metric.value}</Text>
          <Text style={[styles.metricChange, { color: metric.change >= 0 ? 'green' : 'red' }]}>
            {metric.change >= 0 ? '+' : ''}{metric.change}%
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  metricItem: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  metricTitle: {
    fontSize: 14,
    color: '#666',
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  metricChange: {
    fontSize: 14,
    marginTop: 5,
  },
});

