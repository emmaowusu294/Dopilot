import { useTheme } from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={styles.container}>
      <Text>This is the Todo Screen</Text>
      <TouchableOpacity
        onPress={() => {
          toggleDarkMode();
        }}
      >
        <Text>Toggle Mode</Text>
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
