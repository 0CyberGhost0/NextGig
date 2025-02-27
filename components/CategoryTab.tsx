import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const CategoryTab = ({ title, icon, onPress, isFocused }) => {
  //   const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`rounded-xl h-[115px] w-[115px] bg-white shadow-md m-2 shadow-neutral-400/50 items-center justify-center p-3 border-2 ${
        isFocused ? "border-[#0286ff]" : "border-transparent"
      }`}
    >
      <View
        className={`rounded-full p-4 items-center justify-center ${
          isFocused ? "bg-[#0286ff]" : "bg-gray-100"
        }`}
      >
        <Image
          source={icon}
          className="w-9 h-9 p-1" // Increased size for bolder effect
          resizeMode="contain"
          tintColor={isFocused ? "white" : "#0286FF"}
        />
      </View>
      <Text
        numberOfLines={1}
        className="text-black font-semibold text-[14px] w-full text-center mt-2"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryTab;
