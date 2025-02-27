import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons, images } from "@/constants";
import { router } from "expo-router";

interface JobItem {
  id: string;
  company: string;
  role: string;
  location: string;
  minSalary: number;
  maxSalary: number;
  type: string;
  description: string;
  companyDetails: string;
  reviews: string[];
}

interface JobTileProps {
  item: JobItem;
}

const JobTile: React.FC<JobTileProps> = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/(root)/jobPage",
          params: {
            id: item.id,
            company: item.company,
            role: item.role,
            location: item.location,
            minSalary: item.minSalary,
            maxSalary: item.maxSalary,
            type: item.type,
            description: item.description,
            companyDetails: item.companyDetails,
            reviews: item.reviews,
          },
        })
      }
    >
      <View className="relative flex flex-row bg-gray-100 p-4 m-4 rounded-3xl shadow-lg">
        {/* Left Section (Logo + Details) */}
        <View className="flex flex-row items-center">
          <Image
            source={images.templogo}
            className="h-28 w-28 rounded-xl"
            resizeMode="contain"
          />
          <View className="p-4">
            <Text className="font-JakartaSemiBold text-[16px] ">
              {item.company}
            </Text>
            <Text className="font-JakartaBold text-xl">{item.role}</Text>
            <View className="flex flex-row items-center">
              <Image
                source={icons.location}
                className="h-4 w-4 mr-1"
                resizeMode="contain"
              />
              <Text className="text-[12px] font-JakartaMedium">
                {item.location}
              </Text>
            </View>
          </View>
        </View>

        {/* "Full Time" Badge */}
        <View className="absolute bottom-0 right-0 bg-[#5A5ED3] rounded-tl-3xl rounded-br-3xl h-[40px] w-[100px] items-center justify-center">
          <Text className="text-l text-white font-JakartaBold p-3 mx-2 items-center justify-center">
            {item.type}
          </Text>
        </View>
        <View className="absolute top-3 right-0">
          <Text className="text-xl text-black  font-JakartaExtraBold p-3 rounded-tl-3xl rounded-br-3xl">
            {"$"}
            {item.minSalary} - {"$"}
            {item.maxSalary}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobTile;
