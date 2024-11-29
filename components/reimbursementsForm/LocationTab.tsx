import { useFormikContext } from "formik";
import React from "react";
import { Text, View } from "react-native";
import { ExpenseFormValues } from "../../types/expense-form";
import { ModifiedDropdown } from "../ui/modifiedDropdown";
import { formStyles } from "./style";

export const LocationTab = () => {
  const { values, setFieldValue, errors, touched } =
    useFormikContext<ExpenseFormValues>();

  const countries = [
    {
      name: "United States",
      states: [
        {
          name: "California",
          cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"],
        },
        {
          name: "Texas",
          cities: ["Houston", "Dallas", "Austin", "San Antonio"],
        },
        {
          name: "New York",
          cities: ["New York City", "Buffalo", "Rochester", "Albany"],
        },
      ],
    },
    {
      name: "Canada",
      states: [
        {
          name: "Ontario",
          cities: ["Toronto", "Ottawa", "Hamilton", "London"],
        },
        {
          name: "British Columbia",
          cities: ["Vancouver", "Victoria", "Burnaby", "Kelowna"],
        },
        {
          name: "Quebec",
          cities: ["Montreal", "Quebec City", "Gatineau", "Laval"],
        },
      ],
    },
    {
      name: "India",
      states: [
        {
          name: "Maharashtra",
          cities: ["Mumbai", "Pune", "Nagpur", "Nashik"],
        },
        {
          name: "Karnataka",
          cities: ["Bangalore", "Mysore", "Mangalore", "Hubli"],
        },
        {
          name: "Tamil Nadu",
          cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
        },
      ],
    },
  ];

  return (
    <View style={formStyles.container}>
      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>Country</Text>
        <ModifiedDropdown
          data={countries.map((item) => ({
            label: item.name,
            value: item.name,
          }))}
          placeholder="Select a country"
          value={values.location.fromCountry}
          onChange={(selectedValue) => {
            setFieldValue("fromCountry", selectedValue);
          }}
        />
      </View>

      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>State</Text>
        <ModifiedDropdown
          data={countries
            .filter((item) => item.name === values.location.fromCountry)
            .flatMap((item) =>
              item.states.map((state) => ({
                label: state.name,
                value: state.name,
              }))
            )}
          placeholder="Select an item"
          value={values.expenseSubType}
          onChange={(selectedValue) => {
            setFieldValue("expenseSubType", selectedValue);
          }}
        />
      </View>
      <View style={formStyles.inputContainer}>
        <Text style={formStyles.label}>City</Text>
        <ModifiedDropdown
          data={countries
            .filter((cntr) => cntr.name === values.location.fromCountry)
            .filter((st) => st.name === values.location.fromState)
            .map((city) => ({
              label: city,
              value: city,
            }))}
          placeholder="Select an item"
          value={values.expenseSubType}
          onChange={(selectedValue) => {
            setFieldValue("expenseSubType", selectedValue);
          }}
        />
      </View>
    </View>
  );
};
