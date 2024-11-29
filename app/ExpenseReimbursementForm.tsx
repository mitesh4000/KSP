import { BasicInfoTab } from "@/components/reimbursementsForm/BasicInfoTab";
import { ExpenseTab } from "@/components/reimbursementsForm/ExpenseTab";
import { GeneralInfoTab } from "@/components/reimbursementsForm/GeneralInfoTab";
import { LocationTab } from "@/components/reimbursementsForm/LocationTab";
import { Tab, TabView } from "@rneui/themed";
import { Formik } from "formik";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { ExpenseFormValues } from "../types/expense-form";
import customColors from "./utils/customColors";

const validationSchema = Yup.object().shape({
  documentFromDate: Yup.string().required("Required"),
  documentToDate: Yup.string().required("Required"),
  expenseType: Yup.string().required("Required"),
  expenseSubType: Yup.string().required("Required"),
  expense: Yup.object().shape({
    unit: Yup.number().required("Required"),
    unitCost: Yup.number().required("Required"),
    billAmount: Yup.number().required("Required"),
  }),
});

const initialValues: ExpenseFormValues = {
  documentFromDate: new Date(2024, 12, 12),
  documentToDate: new Date(2024, 12, 12),
  expenseType: "",
  expenseSubType: "",
  location: {
    fromCountry: "india",
    fromState: "",
    fromCity: "",
    applyMultipleLocations: false,
  },
  expense: {
    unit: "",
    unitType: "",
    unitCost: 0,
    totalCost: 0,
    taxAmount: 0,
    billAmount: 0,
    documentDate: new Date(2024, 12, 12),
    voucherNo: "",
    vendorTitle: "",
    billDescription: "",
  },
  general: {
    unitSubType: "",
    serviceReportNo: "",
    customer: "",
    truckSlNo: "",
    billSlip: "",
    purposeOfExpense: "",
  },
};

const ExpenseReimbursementForm: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSubmit = (values: ExpenseFormValues) => {
    console.log("Form submitted:", values);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <View style={styles.formContainer}>
            <Tab
              value={index}
              onChange={setIndex}
              indicatorStyle={styles.tabIndicator}
              scrollable
              titleStyle={{ color: customColors.black }}
            >
              <Tab.Item
                style={{
                  backgroundColor: customColors.lightGray,
                  borderColor: customColors.black,
                  outlineColor: customColors.yellow,
                }}
                title="Basic Info"
              />
              <Tab.Item title="Location" />
              <Tab.Item title="Expense" />
              <Tab.Item title="General" />
            </Tab>
            <TabView value={index} onChange={setIndex} animationType="spring">
              <TabView.Item style={styles.tabContent}>
                <BasicInfoTab />
              </TabView.Item>
              <TabView.Item style={styles.tabContent}>
                <LocationTab />
              </TabView.Item>
              <TabView.Item style={styles.tabContent}>
                <ExpenseTab />
              </TabView.Item>
              <TabView.Item style={styles.tabContent}>
                <GeneralInfoTab />
              </TabView.Item>
            </TabView>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ExpenseReimbursementForm;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formContainer: {
    flex: 1,
  },
  tabIndicator: {
    backgroundColor: customColors.primaryColor,
    height: 3,
  },
  tabContent: {
    borderTopColor: customColors.lightGray,
    borderTopWidth: 1,
    flex: 1,
  },
});
