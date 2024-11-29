import { useFormikContext } from "formik";
import React from "react";
import { Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ExpenseFormValues } from "../../types/expense-form"; // Adjust the import according to your project structure
import ModifiedDatePicker from "../modifiedDatePicker";
import { ModifiedDropdown } from "../ui/modifiedDropdown";
import { formStyles } from "./style";

const unitOptions = [
  { label: "Hours", value: "hours" },
  { label: "Pieces", value: "pieces" },
  { label: "Kilograms", value: "kilograms" },
  // Add more units as needed
];

export const ExpenseTab = () => {
  const { values, setFieldValue, errors, touched } =
    useFormikContext<ExpenseFormValues>();

  return (
    <ScrollView style={formStyles.container}>
      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Unit</Text>
        <ModifiedDropdown
          data={unitOptions}
          placeholder="Select a unit"
          value={values.expense.unit}
          onChange={(selectedValue) => setFieldValue("unit", selectedValue)}
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Unit Type</Text>
        <ModifiedDropdown
          data={[
            { label: "Type A", value: "type_a" },
            { label: "Type B", value: "type_b" },
            // Add more unit types as needed
          ]}
          placeholder="Select a unit type"
          value={values.expense.unitType}
          onChange={(selectedValue) => setFieldValue("unitType", selectedValue)}
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Unit Cost</Text>
        <TextInput
          style={formStyles.input}
          keyboardType="numeric"
          placeholder="Enter unit cost"
          value={values.expense.unitCost.toString()}
          onChangeText={(text) => setFieldValue("unitCost", parseFloat(text))}
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Total Cost</Text>
        <TextInput
          style={formStyles.input}
          keyboardType="numeric"
          placeholder="Enter total cost"
          value={values.expense.totalCost.toString()}
          onChangeText={(text) => setFieldValue("totalCost", parseFloat(text))}
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Tax Amount</Text>
        <TextInput
          style={formStyles.input}
          keyboardType="numeric"
          placeholder="Enter tax amount"
          value={values.expense.taxAmount.toString()}
          onChangeText={(text) => setFieldValue("taxAmount", parseFloat(text))}
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Bill Amount</Text>
        <TextInput
          style={formStyles.input}
          keyboardType="numeric"
          placeholder="Enter bill amount"
          value={values.expense.billAmount.toString()}
          onChangeText={(text) => setFieldValue("billAmount", parseFloat(text))}
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Document Date</Text>
        <ModifiedDatePicker
          selectedDate={values.expense.documentDate}
          onDateSelect={(value) => setFieldValue("documentDate", value)}
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Voucher No</Text>
        <TextInput
          style={formStyles.input}
          placeholder="Enter voucher number"
          value={values.expense.voucherNo}
          onChangeText={(text) => setFieldValue("voucherNo", text)}
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Vendor Title</Text>
        <TextInput
          style={formStyles.input}
          placeholder="Enter vendor title"
          value={values.expense.vendorTitle}
          onChangeText={(text) => setFieldValue("vendorTitle", text)}
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Bill Description</Text>
        <TextInput
          style={[formStyles.input, formStyles.textArea]}
          multiline
          numberOfLines={4}
          placeholder="Enter bill description"
          value={values.expense.billDescription}
          onChangeText={(text) => setFieldValue("billDescription", text)}
        />
      </View>
    </ScrollView>
  );
};
