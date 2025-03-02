import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { icons, images } from "@/constants";
import UploadResume from "@/components/uploadResume";
import { LinearGradient } from "expo-linear-gradient";

const Profile = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-gray-200 p-4">
      {/* Header with Back Button */}
      <View className="relative items-center mt-5 mb-6">
        <TouchableOpacity
          className="absolute left-0"
          onPress={() => router.back()}
        >
          <Image
            source={icons.downarrow}
            className="w-7 h-7 rotate-90"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-900">Profile</Text>
      </View>

      {/* Profile Info */}
      <View className="items-center mt-5">
        <Image
          source={icons.profilepic}
          className="w-28 h-28 rounded-full mb-3"
        />
        <Text className="text-2xl font-bold text-gray-800">Ved Prakash</Text>
      </View>

      {/* Contact Details */}
      <View className="mt-6 space-y-3">
        <ContactItem
          icon={icons.email1}
          label="Email"
          value="prakashved0702@gmail.com"
        />
        <ContactItem icon={icons.phone} label="Phone" value="+91 9140857282" />
        <ContactItem
          icon={icons.locationpin}
          label="Location"
          value="Bangalore, India"
        />
      </View>

      {/* Upload Resume Section */}
      <UploadResume />

      {/* Edit Profile Button */}
      <TouchableOpacity className="mt-8 bg-blue-500 p-3 rounded-lg mx-auto w-40">
        <Text className="text-white text-center font-semibold">
          Edit Profile
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Reusable Contact Item Component
const ContactItem = ({ icon, label, value }) => (
  <LinearGradient
    colors={["#CAD9F0", "#CAD9F0"]}
    start={[0, 0]}
    end={[1, 1]}
    style={{
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 12, // Adjust the radius as needed
      padding: 16,
      margin: 8,
      marginHorizontal: 20,
      // Optional shadow for iOS
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,

      elevation: 5,
    }}
  >
    <Image source={icon} className="w-7 h-7 mr-3" resizeMode="contain" />
    <View>
      <Text className="text-sm text-gray-500">{label}</Text>
      <Text className="text-lg text-gray-700 font-semibold">{value}</Text>
    </View>
  </LinearGradient>
);

export default Profile;
