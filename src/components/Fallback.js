import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
  return (
    <View style={{alignItems:"center"}} >
      <Image
        source={require("../../assets/esperar.png")}
        style={{height:300, width:350}}
      />
     
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({});
