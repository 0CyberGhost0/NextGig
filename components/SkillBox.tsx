import { View, Text } from "react-native";
import React from "react";

const SkillBox = ({ text }) => {
  return (
    <View className="border rounded-lg p-2 mb-5 bg-white border-[#3D42CD]">
      <Text>{text}</Text>
    </View>
  );
};

export default SkillBox;
