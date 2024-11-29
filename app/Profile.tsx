import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface EmployeeProfileProps {
  imageUrl: string;
  fullName: string;
  designation: string;
  department: string;
  bloodGroup: string;
  gender: string;
}
const employeeData = {
  imageUrl:
    "https://www.shutterstock.com/image-photo/handsome-indonesian-southeast-asian-man-260nw-2476654675.jpg", // Replace with actual image URL
  fullName: "John Doe",
  designation: "Senior Software Engineer",
  department: "Engineering",
  bloodGroup: "O+",
  gender: "Male",
};

const EmployeeProfile: React.FC<EmployeeProfileProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: employeeData.imageUrl }}
            style={styles.profileImage}
          />
        </View>
        <Text style={styles.fullName}>{employeeData.fullName}</Text>
        <View style={styles.infoContainer}>
          <InfoItem label="Designation" value={employeeData.designation} />
          <InfoItem label="Department" value={employeeData.department} />
          <InfoItem label="Blood Group" value={employeeData.bloodGroup} />
          <InfoItem label="Gender" value={employeeData.gender} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const InfoItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoLabel}>{label}:</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  fullName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  infoContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
  },
  infoValue: {
    fontSize: 16,
    color: "#333",
  },
});

export default EmployeeProfile;
