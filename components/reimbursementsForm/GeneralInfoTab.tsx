import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ExpenseFormValues } from "../../types/expense-form";
import { formStyles } from "./style";

export const GeneralInfoTab = () => {
  const { values, setFieldValue, handleSubmit } =
    useFormikContext<ExpenseFormValues>();

  return (
    <ScrollView style={formStyles.container}>
      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Unit Sub Type</Text>
        <TextInput
          style={formStyles.input}
          placeholder="Enter unit sub type"
          value={values.general.unitSubType}
          onChangeText={(value) => setFieldValue("general.unitSubType", value)}
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Service Report No</Text>
        <TextInput
          style={formStyles.input}
          placeholder="Enter service report number"
          value={values.general.serviceReportNo}
          onChangeText={(value) =>
            setFieldValue("general.serviceReportNo", value)
          }
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Customer</Text>
        <TextInput
          style={formStyles.input}
          placeholder="Enter customer name"
          value={values.general.customer}
          onChangeText={(value) => setFieldValue("general.customer", value)}
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Truck SL No</Text>
        <TextInput
          style={formStyles.input}
          placeholder="Enter truck SL number"
          value={values.general.truckSlNo}
          onChangeText={(value) => setFieldValue("general.truckSlNo", value)}
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Purpose Of Expense (Remarks)</Text>
        <TextInput
          style={[formStyles.input, formStyles.textArea]}
          multiline
          numberOfLines={4}
          placeholder="Enter purpose of expense"
          value={values.general.purposeOfExpense}
          onChangeText={(value) =>
            setFieldValue("general.purposeOfExpense", value)
          }
        />
        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={formStyles.button}
        >
          <Text style={formStyles.btnText}>
            <MaterialCommunityIcons
              name="content-save-check-outline"
              size={24}
              color="white"
            />
            submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
