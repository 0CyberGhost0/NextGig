import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Image,
} from "react-native";
import React, { useState } from "react";

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-center items-center rounded-xl relative border bg-neutral-100  ${isFocused ? "border-[#0286ff]" : "border-gray-100"} ${containerStyle}`}
          >
            {icon && (
              <Image source={icon} className={`h-6 w-6 ml-4 ${iconStyle}`} />
            )}
            <TextInput
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1  ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
