import { useTheme } from "@/hooks/useTheme";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  return (
    <View style={styles.container}>
      <Text>This is the Todo Screen</Text>
      <TouchableOpacity
        style={{ backgroundColor: "red", padding: 10, borderRadius: 10 }}
        onPress={() => {
          toggleDarkMode();
        }}
      >
        <Text style={{ color: "white" }}>Toggle Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 55,
    justifyContent: "center",
    alignItems: "center",
  },
});
