import { FontAwesome } from "@expo/vector-icons";
import { Text } from "@rneui/themed";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ExpenseCard from "../components/ExpenseCard";
import { customColors } from "./utils/customColors";

const sampleExpenses = [
  {
    id: "1",
    expenseName: "Business Trip to Mumbai",
    dateRange: "14 Nov 2024 to 20 Nov 2024",
    expenseCode: "EXP001",
    expenseType: "Travel",
    expenseSubType: "Hotel",
    numberOfUnits: 3,
    unitType: "days",
    finalBillAmount: 15000,
    status: "Approved",
  },
  {
    id: "2",
    expenseName: "Team Lunch",
    dateRange: "25 Nov 2024",
    expenseCode: "EXP002",
    expenseType: "Food",
    expenseSubType: "Meal",
    numberOfUnits: 1,
    unitType: "meal",
    finalBillAmount: 5000,
    status: "In process",
  },
  {
    id: "3",
    expenseName: "Office Supplies",
    dateRange: "30 Nov 2024",
    expenseCode: "EXP003",
    expenseType: "Miscellaneous",
    expenseSubType: "Stationery",
    numberOfUnits: 1,
    unitType: "set",
    finalBillAmount: 2000,
    status: "Denied",
  },
  {
    id: "4",
    expenseName: "Client Meeting in London",
    dateRange: "1 Dec 2024 to 5 Dec 2024",
    expenseCode: "EXP004",
    expenseType: "Travel",
    expenseSubType: "Flight",
    numberOfUnits: 1,
    unitType: "flight",
    finalBillAmount: 25000,
    status: "Approved",
  },
  {
    id: "5",
    expenseName: "Team Dinner",
    dateRange: "3 Dec 2024",
    expenseCode: "EXP005",
    expenseType: "Food",
    expenseSubType: "Dinner",
    numberOfUnits: 1,
    unitType: "meal",
    finalBillAmount: 7000,
    status: "In process",
  },
  {
    id: "6",
    expenseName: "Hotel Stay for Conference",
    dateRange: "10 Dec 2024 to 12 Dec 2024",
    expenseCode: "EXP006",
    expenseType: "Travel",
    expenseSubType: "Hotel",
    numberOfUnits: 2,
    unitType: "days",
    finalBillAmount: 12000,
    status: "Approved",
  },
  {
    id: "7",
    expenseName: "Office Printer",
    dateRange: "15 Dec 2024",
    expenseCode: "EXP007",
    expenseType: "Miscellaneous",
    expenseSubType: "Electronics",
    numberOfUnits: 1,
    unitType: "unit",
    finalBillAmount: 8000,
    status: "Denied",
  },
  {
    id: "8",
    expenseName: "Lunch with Client",
    dateRange: "17 Dec 2024",
    expenseCode: "EXP008",
    expenseType: "Food",
    expenseSubType: "Meal",
    numberOfUnits: 1,
    unitType: "meal",
    finalBillAmount: 4500,
    status: "In process",
  },
  {
    id: "9",
    expenseName: "Conference Registration",
    dateRange: "20 Dec 2024",
    expenseCode: "EXP009",
    expenseType: "Travel",
    expenseSubType: "Registration Fee",
    numberOfUnits: 1,
    unitType: "registration",
    finalBillAmount: 10000,
    status: "Approved",
  },
  {
    id: "10",
    expenseName: "Business Lunch",
    dateRange: "22 Dec 2024",
    expenseCode: "EXP010",
    expenseType: "Food",
    expenseSubType: "Meal",
    numberOfUnits: 1,
    unitType: "meal",
    finalBillAmount: 5500,
    status: "Denied",
  },
  {
    id: "11",
    expenseName: "Office Furniture",
    dateRange: "25 Dec 2024",
    expenseCode: "EXP011",
    expenseType: "Miscellaneous",
    expenseSubType: "Furniture",
    numberOfUnits: 1,
    unitType: "set",
    finalBillAmount: 15000,
    status: "In process",
  },
  {
    id: "12",
    expenseName: "Team Outing to Goa",
    dateRange: "5 Jan 2025 to 8 Jan 2025",
    expenseCode: "EXP012",
    expenseType: "Travel",
    expenseSubType: "Accommodation",
    numberOfUnits: 4,
    unitType: "days",
    finalBillAmount: 20000,
    status: "Approved",
  },
  {
    id: "13",
    expenseName: "Taxi Fare to Office",
    dateRange: "10 Jan 2025",
    expenseCode: "EXP013",
    expenseType: "Travel",
    expenseSubType: "Taxi",
    numberOfUnits: 1,
    unitType: "ride",
    finalBillAmount: 1200,
    status: "In process",
  },
  {
    id: "14",
    expenseName: "Coffee Break for Team",
    dateRange: "15 Jan 2025",
    expenseCode: "EXP014",
    expenseType: "Food",
    expenseSubType: "Coffee",
    numberOfUnits: 1,
    unitType: "coffee",
    finalBillAmount: 800,
    status: "Denied",
  },
  {
    id: "15",
    expenseName: "Software Subscription for Team",
    dateRange: "18 Jan 2025",
    expenseCode: "EXP015",
    expenseType: "Miscellaneous",
    expenseSubType: "Subscription",
    numberOfUnits: 1,
    unitType: "year",
    finalBillAmount: 5000,
    status: "Approved",
  },
];

const ReimbursementRequestListing: React.FC = () => {
  const renderExpenseCard = ({
    item,
  }: {
    item: (typeof sampleExpenses)[0];
  }) => (
    <ExpenseCard
      {...item}
      onPress={() => console.log(`Expense ${item.id} pressed`)}
    />
  );

  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchAddContainer}>
          <TextInput
            style={styles.searchInput}
            // value={searchQuery}
            // onChangeText={handleSearchChange}
            placeholder="Search..."
          />

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => router.navigate("/ExpenseReimbursementForm")}
          >
            <FontAwesome name="plus-circle" size={20} color="white" />
            <Text style={styles.addButtonText}> Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={sampleExpenses}
          renderItem={renderExpenseCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  listContent: {},

  searchAddContainer: {
    margin: 5,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  searchInput: {
    flex: 7,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginRight: 5,
  },
  addButton: {
    flex: 3,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: customColors.primaryColor,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  addButtonText: {
    color: customColors.white,
    marginLeft: 8,
    fontSize: 16,
  },
});

export default ReimbursementRequestListing;
