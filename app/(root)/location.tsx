import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";
import SearchField from "@/components/SearchField";
import { StatusBar } from "react-native";

const LocationModal = ({ isOpen, onClose }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <Modal
      visible={isOpen}
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 justify-center items-center bg-black/50">
          <TouchableWithoutFeedback>
            <View className="bg-white rounded-2xl w-[90%] p-4">
              <View className="flex flex-row items-center mt-3">
                <TouchableOpacity onPress={onClose}>
                  <Image
                    source={icons.downarrow}
                    className="w-9 h-9 mt-2 mx-2"
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Text className="font-JakartaBold text-[24px] ml-3">
                  Select a location
                </Text>
              </View>

              <View className="mt-6 mr-3">
                <SearchField
                  IconLeft={icons.search}
                  placeholder="Search for area, street name..."
                  themeColor="black"
                  className="w-full h-[60px] mx-[5px]"
                  onChangeText={(text) => setSearchText(text)}
                />
              </View>

              <View className="bg-gray-100 rounded-xl mt-6 p-2">
                <View className="flex flex-row items-center">
                  <Image
                    source={icons.locationtarget}
                    className="h-8 w-8"
                    resizeMode="contain"
                  />
                  <View className="flex-1 ml-4 p-1 ">
                    <Text className="text-lg font-JakartaBold">
                      Use Current Location
                    </Text>
                    <Text className="text-lg font-JakartaMedium text-gray-600">
                      Bhubaneswar, India
                    </Text>
                  </View>
                  <Image
                    source={icons.downarrow}
                    resizeMode="contain"
                    className="w-7 h-7 -rotate-90 ml-auto"
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default LocationModal;
