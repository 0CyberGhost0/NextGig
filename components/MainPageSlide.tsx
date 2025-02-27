import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const MainPageSlide = ({ item }) => {
  // console.log(item.className);
  return (
    <View
      key={item.id}
      className="relative bg-[#E2E2E2] w-[90%] self-center min-h-[210px] rounded-xl"
    >
      <LinearGradient
        colors={["#3D42CD", "#5A5ED3"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "77%",
          borderRadius: 20,
          paddingHorizontal: 24,
          paddingVertical: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Side: Text Content */}
        <View className="w-[55%]">
          <Text className="text-white font-JakartaExtraBold text-[22px] mb-2">
            {item.title}
          </Text>
          <Text className="text-white font-JakartaSemiBold text-[12px]">
            {item.description}
          </Text>
        </View>

        {/* Right Side: Image Positioned Above & Right */}
        {/* absolute -right-2 -bottom-14 overflow-visible */}
        <View className="absolute -right-2 -bottom-14 overflow-visible">
          <Image
            source={item.image}
            className={item.className}
            resizeMode="contain"
            style={item.style}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default MainPageSlide;
