import customColors from "@/app/utils/customColors";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface ModifiedDatePickerProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

const ModifiedDatePicker = ({
  selectedDate,
  onDateSelect,
}: ModifiedDatePickerProps) => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setDatePickerVisible(true)}
        style={styles.input}
      >
        <Text>{formatDate(selectedDate) || "Select date"}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        date={selectedDate}
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={(date) => {
          onDateSelect(date);
          setDatePickerVisible(false);
        }}
        onCancel={() => setDatePickerVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: customColors.gray,
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

export default ModifiedDatePicker;
