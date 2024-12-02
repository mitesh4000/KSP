import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

type Notice = {
  id: string;
  title: string;
  content: string;
  date: string;
};

const notices: Notice[] = [
  {
    id: "1",
    title: "Company Meeting",
    content: "All-hands meeting on Friday at 3 PM",
    date: "2023-06-15",
  },
  {
    id: "2",
    title: "New Project Launch",
    content: "Project X kicks off next week",
    date: "2023-06-18",
  },
  {
    id: "3",
    title: "Holiday Notice",
    content: "Office will be closed on July 4th",
    date: "2023-07-01",
  },
];

export const NoticeBoard: React.FC = () => {
  return (
    <View>
      <FlatList
        data={notices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noticeItem}>
            <Text style={styles.noticeTitle}>{item.title}</Text>
            <Text style={styles.noticeContent}>{item.content}</Text>
            <Text style={styles.noticeDate}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  noticeItem: {
    backgroundColor: "#e8f4f8",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  noticeTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  noticeContent: {
    marginTop: 5,
  },
  noticeDate: {
    marginTop: 5,
    color: "#666",
    fontSize: 12,
  },
});
