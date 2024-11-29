import { customColors } from "@/app/utils/customColors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Tl from "./tl";

interface ExpenseCardProps {
  expenseName: string;
  dateRange: string;
  expenseCode: string;
  expenseType: string;
  expenseSubType: string;
  numberOfUnits: number;
  unitType: string;
  finalBillAmount: number;
  status: string;
  onPress: () => void;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({
  expenseName,
  dateRange,
  expenseCode,
  expenseType,
  expenseSubType,
  numberOfUnits,
  unitType,
  finalBillAmount,
  status,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <View>
          <Text style={styles.expenseName}>{expenseName}</Text>
          <Tl></Tl>
          <Text style={styles.dateRange}>{dateRange}</Text>
        </View>
        <View style={styles.codeContainer}>
          <Text style={styles.expenseCode}>{expenseCode}</Text>
          <View style={styles.badgeContainer}>
            <Text style={(styles.badge, styles[status])}>{status}</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <Text
          style={styles.expenseType}
        >{`${expenseType}/${expenseSubType}`}</Text>
        <Text style={styles.units}>
          {`for : ${numberOfUnits} ${unitType} spent :`}

          {`₹${finalBillAmount.toFixed(2)}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 10,
    margin: 10,
    backgroundColor: "#ffffff",
    borderColor: "gray",
    borderWidth: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  expenseName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  dateRange: {
    fontSize: 12,
    color: "#666",
  },
  codeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  expenseCode: {
    fontSize: 12,
    color: "#666",
    marginRight: 8,
  },
  content: {
    marginBottom: 8,
  },
  expenseType: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  units: {
    fontSize: 14,
    color: "#333",
  },
  footer: {
    alignItems: "flex-end",
  },
  finalBillAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  badgeContainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  Approved: {
    backgroundColor: "transparent",
    color: customColors.green,
    padding: 5,
    fontSize: 10,
    borderRadius: 50,
    borderColor: customColors.green,
    borderWidth: 2,
  },
  "In process": {
    backgroundColor: "transparent",
    color: customColors.yellow,
    padding: 5,
    fontSize: 10,
    borderRadius: 50,
    borderColor: customColors.yellow,
    borderWidth: 2,
  },
  Denied: {
    backgroundColor: "transparent",
    color: customColors.read,
    padding: 5,
    fontSize: 10,
    borderRadius: 50,
    borderColor: customColors.read,
    borderWidth: 2,
  },
});

export default ExpenseCard;
