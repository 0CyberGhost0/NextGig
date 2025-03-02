import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";

const UploadResume = () => {
  return (
    <View className="p-5 mt-6 bg-white rounded-xl shadow-lg m-5">
      <Text className="text-2xl font-JakartaBold text-gray-800">
        Upload the Resume
      </Text>
      <Text className="text-sm text-gray-600 m-2">
        Make sure the file format meets the requirement. It must be a .doc or
        .pdf
      </Text>
      <View
        className="border-2 rounded-2xl p-4 items-center"
        style={{ borderStyle: "dashed" }}
      >
        <Image source={images.pdf} className="w-32 h-32" resizeMode="contain" />
        <Text className="text-base font-JakartaLight mt-2">Choose a file</Text>
        <Text className="text-sm font-JakartaLight text-center px-2">
          Maximum file size 500 KB • See more requirements
        </Text>
      </View>
    </View>
  );
};

export default UploadResume;
