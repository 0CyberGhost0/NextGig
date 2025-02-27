import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SafeAreaView className="flex h-full justify-between bg-white items-center">
      <TouchableOpacity
        className="flex justify-end w-full items-end p-8"
        onPress={() => router.push("/(auth)/SignUp")}
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        onIndexChanged={(index) => setActiveIndex(index)}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]" />}
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[400px]"
              resizeMode="contain"
            />
            <Text className="text-black text-3xl text-center w-full mx-10 font-JakartaBold">
              {item.title}
            </Text>
            <Text className="text-black text-lg font-JakartaSemiBold mx-10 mt-3 text-center">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>

      <CustomButton
        title={activeIndex === onboarding.length - 1 ? "Get Started" : "Next"}
        className="mt-10 my-10 w-10/12"
        onPress={() => {
          if (activeIndex === onboarding.length - 1) {
            router.push("/(auth)/SignIn");
          } else {
            swiperRef.current?.scrollBy(1);
          }
        }}
      />
    </SafeAreaView>
  );
};

export default Welcome;
