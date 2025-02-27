import { View, Text, Image } from "react-native";
import React from "react";
import { icons, images } from "@/constants";
import SkillBox from "./SkillBox";

const JobCard = () => {
  return (
    <View className="bg-white rounded-2xl p-4 shadow-lg my-4">
      {/* Header Section */}
      <View className="flex flex-row items-center">
        <Image
          source={images.templogo}
          className="w-16 h-16 rounded-full mr-4"
          resizeMode="contain"
        />
        <View>
          <Text className="text-xl font-JakartaBold">Software Engineer</Text>
          <Text className="text-base font-JakartaMedium text-gray-600">
            Google
          </Text>
        </View>
      </View>

      {/* Skills Section */}
      <View className="flex flex-row gap-x-2 mt-4 justify-center items-center">
        <SkillBox text="Data Structures" />
        <SkillBox text="Algorithms" />
        <SkillBox text="System Design" />
        <View className="items-center justify-center bg-[#DCE0F1] rounded-full p-1 mb-5">
          <Text>+3</Text>
        </View>
      </View>

      {/* Job Details Section */}
      <View className="flex flex-row rounded-lg justify-between ">
        <View className="flex flex-row items-center  bg-[#DCE0F1] p-2 rounded-lg">
          <Image
            source={icons.salary}
            className="w-5 h-5 m-1"
            resizeMode="contain"
            style={{ tintColor: "gray" }}
          />
          <Text className="text-gray-700 font-JakartaBold">$100K - $120K</Text>
        </View>

        <View className="flex flex-row items-center  bg-[#DCE0F1]  p-2 rounded-lg">
          <Image
            source={icons.location}
            className="w-5 h-5 m-1"
            resizeMode="contain"
            style={{ tintColor: "gray" }}
          />
          <Text className="text-gray-700 font-JakartaBold">Bangalore</Text>
        </View>

        <View className="flex flex-row items-center    p-2 rounded-lg bg-[#DCE0F1]">
          <Image
            source={icons.jobtype}
            className="w-5 h-5 m-1 mx-1"
            resizeMode="contain"
            style={{ tintColor: "gray" }}
          />
          <Text className="text-gray-700 font-JakartaBold">Remote</Text>
        </View>
      </View>
    </View>
  );
};

export default JobCard;
