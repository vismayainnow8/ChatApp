import React from "react";
import { View, Text, StatusBar } from "react-native";

const Register = () => {
  return (

    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "green", flex: 0.5 }} />
      <Text>Hi</Text>
    </View>
  );
};

export default Register;
