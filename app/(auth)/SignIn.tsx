import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import OAuth from "@/components/OAuth";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSignUpPress = () => {};
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="flex-1">
        <View className="relative w-full h-[250px]">
          <Image source={images.jobsearch} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaExtraBold bottom-5 left-5 mt-10  ">
            Welcome 👋
          </Text>
        </View>
        <View className="p-5 mt-10">
          <InputField
            placeholder="Enter Your Email"
            label="Email"
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
            keyboardType="email-address"
            icon={icons.email}
          />
          <InputField
            placeholder="Enter Your Password"
            label="Password"
            value={form.password}
            onChangeText={(text) => setForm({ ...form, password: text })}
            icon={icons.lock}
            secureTextEntry={true}
          />
          <CustomButton
            title="SignIn"
            className="mt-10"
            onPress={onSignUpPress}
          />
          <OAuth />
          <Link
            href="/SignUp"
            className="text-center text-lg mt-10 text-gray-700"
          >
            <Text> Don't have an Account? </Text>
            <Text className="text-blue-700">Sign Up</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
