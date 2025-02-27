import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, JobCategory } from "@/constants";
import { router } from "expo-router";
import SearchField from "@/components/SearchField";
import CategoryTab from "@/components/CategoryTab";
import CustomButton from "@/components/CustomButton";

const SelectJobCategory = () => {
  const [searchText, setSearchText] = useState("");

  // Filter categories based on search input
  const filteredCategories = JobCategory.filter((category) =>
    category.title.toLowerCase().includes(searchText.toLowerCase()),
  );
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategorySelect = (category: { title: string }) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category.id)) {
        return prev.filter((id) => id !== category.id);
      } else {
        return [...prev, category.id];
      }
    });
  };
  console.log(selectedCategories);
  const numColumns = 3;
  const items = [...filteredCategories];
  while (items.length % numColumns !== 0) {
    items.push({ id: `empty-${items.length}`, empty: true });
  }

  return (
    <SafeAreaView className="flex-1 px-5">
      {/* Back Button */}
      <View className="flex flex-row items-center mb-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={icons.backArrow}
            className="w-10 h-10"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text className="text-2xl font-JakartaBold text-[28px]">
        Select Job Category
      </Text>
      <Text className="font-JakartaSemiBold text-gray-600 mt-2">
        Select at least two categories that best match your skills.
      </Text>

      {/* Search Field */}
      <SearchField
        placeholder="Search Job Category"
        IconLeft={icons.search}
        onChangeText={setSearchText}
        value={searchText}
        className="mt-8"
      />

      {/* Categories List */}
      <View className="flex-1 mt-4">
        {filteredCategories.length === 0 ? (
          <Text className="text-gray-500 text-center mt-10">
            No categories found.
          </Text>
        ) : (
          <FlatList
            data={items}
            renderItem={({ item }) =>
              item.empty ? (
                <View className="flex-1 m-2" /> // Empty View for spacing
              ) : (
                <CategoryTab
                  title={item.title}
                  icon={item.icon}
                  onPress={() => handleCategorySelect(item)}
                  isFocused={selectedCategories.includes(item.id)}
                />
              )
            }
            keyExtractor={(item) => item.id.toString()}
            numColumns={numColumns}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
        {selectedCategories.length >= 2 && (
          <CustomButton
            title="Finish Sign Up"
            className="mb-10 p-5"
            onPress={() => router.push("/(root)/(tabs)/explore")}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SelectJobCategory;
