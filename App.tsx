import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  //jsx
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
      <View style={styles.parent}>
        <Text style={styles.header}>thanhdo</Text>
        <Text>
          thanhdo
          <Text style={styles.child}>bla bla</Text>
        </Text>
      </View>
      <Text style={styles.hello1}>thanhdo</Text>
      <Text>thanhdo</Text>
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
    backgroundColor: "yellow",
  },
  hello1: {
    color: "red",
    fontSize: 60,
    borderColor: "green",
    borderWidth: 1,
    padding: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  parent: {
    fontSize: 60,
    color: "green",
    backgroundColor: "green",
    // không kế thừa thuộc tính backgroud color của cha
  },
  child: {
    fontSize: 30,
    color: "pink",
  },
});
