import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants";

const TabIcon = ({ source, focused, title }) => (
  <View className="flex items-center justify-center">
    <View
      className={`rounded-full w-14 h-14 items-center justify-center ${
        focused ? "bg-gray-100" : ""
      }`}
    >
      <Image
        source={source}
        tintColor={focused ? "#3D42CD" : "gray"}
        // tintColor="black"
        resizeMode="contain"
        className="w-8 h-8"
      />
    </View>
  </View>
);

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarItemStyle: {
          justifyContent: "center", // Center items properly
          alignItems: "center",
        },
        tabBarStyle: {
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 22,
          height: 80,
          flexDirection: "row",
          position: "absolute",
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 5,
        },
      }}
    >
      {[
        { name: "explore", icon: icons.explore, title: "Explore" },
        { name: "search", icon: icons.rocket, title: "Search" },
        { name: "message", icon: icons.message, title: "Message" },
        { name: "profile", icon: icons.profile, title: "Profile" },
      ].map(({ name, icon, title }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            headerShown: false,
            tabBarButton: (props) => (
              <TouchableWithoutFeedback {...props}>
                <View className="flex-1 justify-center items-center">
                  {props.children}
                </View>
              </TouchableWithoutFeedback>
            ),
            tabBarIcon: ({ focused }) => (
              <TabIcon source={icon} focused={focused} title={title} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default Layout;
