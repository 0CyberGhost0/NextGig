import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleSignIn = () => {};
  return (
    <View>
      <View className="flex flex-row justify-center items-center gap-x-3 mt-3">
        <View className="flex-1 h-[1px] bg-gray-400" />
        <Text className="text-lg">Or</Text>
        <View className="flex-1 h-[1px] bg-gray-400" />
      </View>
      <CustomButton
        title="Log In with Google"
        className="mt-5 shadow-none w-full"
        bgColor="bg-transparent border-neutral-300 border-[0.5px]"
        textColor="text-black"
        IconLeft={() => (
          <Image
            className="h-5 w-5 mx-2"
            resizeMode="contain"
            source={icons.Google}
          />
        )}
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default OAuth;
