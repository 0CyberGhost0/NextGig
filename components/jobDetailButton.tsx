import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const JobDetailButton = ({ title, isSelected, onTap }) => {
  return (
    <TouchableOpacity
      onPress={onTap}
      className={` m-2 rounded-3xl w-[135px] h-[45px] items-center justify-center ${isSelected ? "bg-[#3D42CD]" : "bg-[#DCE0F1]"}`}
    >
      <Text
        className={` p-3 text-lg text-center font-JakartaBold justify-center ${isSelected ? "text-white" : "text-[#3D42CD]"}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default JobDetailButton;
