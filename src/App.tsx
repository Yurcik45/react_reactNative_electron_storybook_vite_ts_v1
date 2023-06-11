import React from "react";
import { Platform, Text } from "react-native";

export const App = () => {
    return (
        <Text>Hello World! Your platform is { Platform.OS }</Text>
    )
}