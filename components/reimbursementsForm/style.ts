import customColors from "@/app/utils/customColors";
import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({
  container: {
    padding: 16,
  },
  inputContainer: {
    margin: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: customColors.lightGray,
    borderRadius: 6,
    padding: 12,
    margin: 6,
    fontSize: 16,

    height: 100,
    textAlignVertical: "top",
  },

  input: {
    borderWidth: 1,
    borderColor: customColors.lightGray,
    borderRadius: 6,
    padding: 12,
    margin: 6,
    fontSize: 16,
  },
  dropdown: {
    height: 50,
    borderColor: customColors.lightGray,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  button: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: customColors.primaryColor,
    padding: 10,
    borderRadius: 6,
  },
  btnText: {
    margin: 6,
    fontSize: 20,
    color: customColors.white,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    left: 5,
    fontSize: 12,
    marginBottom: 3,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
