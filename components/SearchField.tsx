import { View, TextInput, Image } from "react-native";
import React from "react";

const SearchField = ({
  placeholder,
  IconLeft,
  IconRight,
  className,
  themeColor,
  ...props
}) => {
  return (
    <View
      className={`flex flex-row w-[380px] rounded-xl items-center shadow-md shadow-neutral-900/70 p-2 mx-2  bg-gray-100 ${className}`}
    >
      {IconLeft && (
        <Image
          source={IconLeft}
          className="w-7 h-7 mr-2 mx-4"
          resizeMode="contain"
          tintColor={themeColor || "gray"}
        />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={themeColor || "gray"}
        className="flex-1 mx-4 text-[16px] text-black font-JakartaSemiBold"
        {...props} // Allows passing extra props like onChangeText
      />
      {IconRight && (
        <Image
          source={IconRight}
          className="w-6 h-6 mr-2 mx-4"
          resizeMode="contain"
          tintColor={themeColor || "gray"}
        />
      )}
    </View>
  );
};

export default SearchField;
