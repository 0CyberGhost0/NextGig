import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images, recommendedJob } from "@/constants";
import JobDetailButton from "@/components/jobDetailButton";
import CustomButton from "@/components/CustomButton";
import { router, useLocalSearchParams } from "expo-router";

const textRender = (description, companyDetails, reviews, tabSelected) => {
  if (tabSelected === "Description") {
    return description || "No description available.";
  } else if (tabSelected === "Company") {
    return companyDetails || "No company details available.";
  } else {
    return reviews || "No reviews available.";
  }
};

const JobPage = () => {
  const {
    id,
    company,
    role,
    location,
    minSalary,
    maxSalary,
    type,
    description,
    companyDetails,
    reviews,
  } = useLocalSearchParams();

  const [tabSelected, setTabSelected] = useState("Description");

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-8">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {/* Top Bar */}
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
            <Text className="font-JakartaBold text-2xl">Job Details</Text>
          </View>

          {/* Job Header */}
          <View className="flex flex-row items-center justify-between">
            {/* Job Info */}
            <View className="flex-1 pr-4">
              <Text
                className="font-JakartaExtraBold text-3xl mb-2 max-w-[200px] flex-wrap"
                numberOfLines={2}
              >
                {role || "Job Role"}
              </Text>
              <View className="flex flex-row items-center space-x-2 mb-1">
                <Image
                  source={icons.location}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
                <Text className="text-base text-gray-800 font-JakartaSemiBold mx-4">
                  {location || "Location not specified"}
                </Text>
              </View>
              <View className="flex flex-row items-center space-x-2">
                <Image
                  source={icons.jobtype}
                  className="w-5 h-5"
                  resizeMode="contain"
                />
                <Text className="text-base text-gray-800 font-JakartaSemiBold mx-4">
                  {type || "Job Type"}
                </Text>
              </View>
            </View>

            {/* Company Logo & Name */}
            <View className="items-center">
              <Image
                source={images.templogo}
                className="h-[100px] w-[100px] rounded-3xl"
                resizeMode="contain"
              />
              <Text className="font-JakartaBold text-xl mt-1">
                {company || "Company Name"}
              </Text>
            </View>
          </View>

          {/* Job Detail Tabs */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: "row", marginTop: 20 }}
          >
            {["Description", "Company", "Reviews"].map((tab) => (
              <JobDetailButton
                key={tab}
                title={tab}
                isSelected={tabSelected === tab}
                onTap={() => setTabSelected(tab)}
              />
            ))}
          </ScrollView>

          {/* Job Description */}
          <View className="mt-5 m-4 flex-grow">
            <Text className="text-gray-700 text-base leading-6">
              {textRender(description, companyDetails, reviews, tabSelected)}
            </Text>
          </View>
        </ScrollView>

        {/* Apply Button at the Bottom */}
        <View className="pb-6">
          <CustomButton
            className="p-5"
            bgColor="bg-[#3D42CD]"
            textColor="text-white"
            title="Apply Now"
            text
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default JobPage;
