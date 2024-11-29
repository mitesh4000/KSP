import customColors from "@/app/utils/customColors";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CustomHeaderProps {
  title: string;
  onMenuPress?: () => void;
  onNotificationPress?: () => void;
  onProfilePress?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  onMenuPress,
  onNotificationPress,
  onProfilePress,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onMenuPress} style={styles.iconContainer}>
        <MaterialIcons name="menu" size={24} color={customColors.white} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightIcons}>
        <TouchableOpacity
          onPress={onNotificationPress}
          style={styles.iconContainer}
        >
          <MaterialIcons
            name="notifications"
            size={24}
            color={customColors.white}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => {
            router.navigate("/Profile");
          }}
          style={styles.iconContainer}
        >
          <MaterialIcons name="account-circle" size={24} color="black" />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: customColors.secondaryColor,
    height: 60,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: customColors.primaryColor,
    paddingVertical: 10,
    width: "100%",
  },

  iconContainer: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: customColors.white,
  },
  rightIcons: {
    flexDirection: "row",
  },
});

export default CustomHeader;
