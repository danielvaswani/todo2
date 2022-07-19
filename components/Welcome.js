import React from "react";
import { Text } from "react-native";

const Welcome = (props) => {
  return <Text style={welcome}> Hello {props.name} </Text>;
};

const welcome = {
  color: "#FFF",
};

export default Welcome;
