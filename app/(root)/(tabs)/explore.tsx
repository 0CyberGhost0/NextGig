import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, mainPage, recommendedJob } from "@/constants";
import Swiper from "react-native-swiper";
import MainPageSlide from "@/components/MainPageSlide";
import SearchField from "@/components/SearchField";
import JobTile from "@/components/JobTile";
import LocationModal from "../location";

const Explore = () => {
  const swiperRef = useRef<Swiper>(null);
  const activeIndexRef = useRef(0);

  console.log("Explore Screen Rendered");
  const [searchText, setSearchText] = useState("");
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#E2E2E2]">
      <StatusBar
        barStyle="dark-content"
        // backgroundColor={isLocationModalOpen ? "black" : "white"}
      />

      {/* Header */}
      <View className="flex flex-row items-center justify-between mx-5 mt-4">
        <View className="flex flex-row items-center flex-1">
          <Image
            source={icons.location}
            className="w-10 h-10"
            resizeMode="contain"
          />
          <TouchableOpacity onPress={() => setIsLocationModalOpen(true)}>
            <View className="ml-2">
              <Text className="font-JakartaSemiBold text-xs text-gray-700">
                Choose Location
              </Text>
              <View className="flex flex-row items-center">
                <Text className="font-JakartaExtraBold text-xl text-black">
                  Bangalore, India
                </Text>
                <Image
                  source={icons.downarrow}
                  className="w-6 h-6 ml-2"
                  resizeMode="contain"
                />
              </View>
            </View>
          </TouchableOpacity>
          <LocationModal
            isOpen={isLocationModalOpen}
            onClose={() => setIsLocationModalOpen(false)}
          />
        </View>
        <Image
          source={icons.profilepic}
          className="h-12 w-12 rounded-full"
          resizeMode="contain"
        />
      </View>

      {/* Main Content */}
      <FlatList
        data={recommendedJob}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobTile item={item} />}
        ListFooterComponent={<View style={{ height: 90 }} />}
        ListHeaderComponent={
          <View>
            {/* Swiper for Image Slides */}
            <View className="h-[250px]">
              <Swiper
                ref={swiperRef}
                index={0}
                loop={true}
                onIndexChanged={(index) => {
                  console.log("Active Index Changed:", index);
                  activeIndexRef.current = index;
                }}
                dot={
                  <View className="w-[8px] h-[8px] mx-1 mt-4 bg-gray-100 rounded-full opacity-100" />
                }
                activeDot={
                  <View className="w-[8px] h-[8px] mx-1 mt-4 bg-[#0286FF] rounded-full opacity-100" />
                }
              >
                {mainPage.map((item) => (
                  <MainPageSlide key={item.id} item={item} />
                ))}
              </Swiper>
            </View>

            {/* Search Bar */}
            <SearchField
              placeholder="Search For Job"
              IconLeft={icons.search}
              IconRight={icons.filter}
              className="mt-1 mx-8"
              themeColor="#3D42CD"
              onChangeText={(text) => setSearchText(text)}
            />

            {/* Recommended Job Header */}
            <View className="flex flex-row items-center justify-between mt-6 mx-6 bg-[#E2E2E2]">
              <Text className="font-JakartaBold text-2xl">Recommended Job</Text>
              <Text className="text-[13px] font-JakartaMedium text-gray-800 underline">
                View All
              </Text>
            </View>
          </View>
        }
        nestedScrollEnabled
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default Explore;
