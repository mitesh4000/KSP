import customColors from "@/app/utils/customColors";
import { useAppStore } from "@/app/utils/store";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { ExternalPathString, RelativePathString, router } from "expo-router";
import React from "react";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  animatedValue: Animated.Value;
}
const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  animatedValue,
}) => {
  const { toggleSidebar, isSidebarOpen } = useAppStore();
  const insets = useSafeAreaInsets();

  const sidebarWidth = 250;

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-sidebarWidth, 0],
  });

  const navigate = (route: RelativePathString | ExternalPathString) => {
    router.navigate(route);
    onClose();
  };
  const user = {
    profileImage: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Replace with a valid image URL
    fullName: "John Doe",
    email: "john.doe@example.com",
  };

  return (
    <Animated.View
      style={[
        styles.sidebar,
        {
          transform: [{ translateX }],
          width: sidebarWidth,
        },
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: user.profileImage }}
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.fullName}>{user.fullName}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onClose}>
          <MaterialIcons name="close" size={24} color={customColors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigate("./Dashboard")}
        >
          <MaterialIcons
            name="dashboard"
            size={24}
            color={customColors.white}
          />
          <Text style={styles.menuItemText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="add-task" size={24} color={customColors.white} />
          <Text style={styles.menuItemText}>Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome6
            name="money-bill-transfer"
            size={24}
            color={customColors.white}
          />
          <TouchableOpacity onPress={() => navigate("./Reimbursements")}>
            <Text style={styles.menuItemText}>Expenses & Reimbursements</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigate("./Profile")}
        >
          <MaterialIcons name="settings" size={24} color={customColors.white} />
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: customColors.secondaryColor,
    elevation: 5,
    shadowColor: customColors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  menuItemText: {
    marginLeft: 16,
    fontSize: 16,
    color: customColors.white,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Makes the image circular
    marginRight: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  fullName: {
    fontWeight: "bold",

    color: customColors.white,
  },
  email: {
    color: customColors.lightGray,
  },
});

export default Sidebar;
