import { useFormikContext } from "formik";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { ExpenseFormValues } from "../../types/expense-form";
import ModifiedDatePicker from "../modifiedDatePicker";
import { ModifiedDropdown } from "../ui/modifiedDropdown";
import { formStyles } from "./style";
const data = [
  {
    expenseType: "Travel",
    expenseSubTypes: ["Flight", "Hotel", "Car Rental", "Public Transport"],
  },
  {
    expenseType: "Food",
    expenseSubTypes: ["Breakfast", "Lunch", "Dinner"],
  },
  {
    expenseType: "Office Supplies",
    expenseSubTypes: ["Stationery", "Electronics", "Software"],
  },
  {
    expenseType: "Professional Services",
    expenseSubTypes: ["Consulting Fees", "Legal Fees", "Accounting Fees"],
  },
  {
    expenseType: "Marketing & Advertising",
    expenseSubTypes: [
      "Digital Marketing",
      "Print Advertising",
      "Social Media Marketing",
    ],
  },
];
export const BasicInfoTab = () => {
  const [expanseSubTypeDisabled, setExpanseSubTypeDisabled] = useState(true);

  const { values, setFieldValue, errors, touched } =
    useFormikContext<ExpenseFormValues>();
  return (
    <View style={formStyles.container}>
      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Document From Date</Text>
        <ModifiedDatePicker
          selectedDate={values.documentFromDate}
          onDateSelect={(value) => setFieldValue("documentFromDate", value)}
        ></ModifiedDatePicker>
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Document To Date</Text>
        <ModifiedDatePicker
          selectedDate={values.documentToDate}
          onDateSelect={(value) => setFieldValue("documentToDate", value)}
        ></ModifiedDatePicker>
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Expense Type</Text>
        <ModifiedDropdown
          data={data.map((item) => ({
            label: item.expenseType,
            value: item.expenseType,
          }))}
          placeholder="Select an item"
          value={values.expenseType}
          onChange={(selectedValue) => {
            setExpanseSubTypeDisabled(false);
            setFieldValue("expenseType", selectedValue);
          }}
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Expense Sub Type</Text>
        <ModifiedDropdown
          data={data
            .filter((item) => item.expenseType === values.expenseType)
            .flatMap((item) =>
              item.expenseSubTypes.map((subitem) => ({
                label: subitem,
                value: subitem,
              }))
            )}
          disabled={expanseSubTypeDisabled}
          placeholder="Select an item"
          value={values.expenseSubType || "asdas"}
          onChange={(selectedValue) => {
            setFieldValue("expenseSubType", selectedValue);
          }}
        />
      </View>
    </View>
  );
};
