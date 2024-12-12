import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  //jsx
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Count = {count}</Text>

      <Button
        onPress={() => {
          setCount(count + 1);
        }}
        title="Increase"
        color="red"
      />
    </View>
  );
}

// css có tính kế thừa, còn React Native thì không, chỉ phần text là có

//css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
