import { View, Text } from "react-native";
import React, { useState } from "react";
import SearchField from "@/components/SearchField";
import { icons, searchJobTile } from "@/constants";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import JobCard from "@/components/JobCard";
import MainPageSlide from "@/components/MainPageSlide";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  return (
    <SafeAreaView className="flex-1 bg-[#E2E2E2]">
      {/* <StatusBar backgroundColor="#E2E2E2" /> */}
      <MainPageSlide item={searchJobTile} />

      {/* <Text className="text-3xl font-JakartaBold mx-9 mt-4">Search Job</Text> */}
      <SearchField
        placeholder="Search for Job"
        IconLeft={icons.search}
        IconRight={icons.filter}
        themeColor="#3D42CD"
        className="mt-10 mx-8 shadow-2xl"
        onChangeText={(text) => setSearchText(text)} // Changed onPress to onChangeText
      />
      <View className="m-7">
        <JobCard />
        <JobCard />
        <JobCard />
      </View>
    </SafeAreaView>
  );
};

export default Search;
