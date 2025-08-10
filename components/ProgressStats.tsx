import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

const ProgressStats = () => {
  const { colors } = useTheme();
  const settingsStyles = createSettingsStyles(colors);

  //getting the todos
  const todos = useQuery(api.todos.getTodos);

  // getting the no of completed todos
  const totalTodos = todos ? todos.length : 0;

  //getting the no of completed todos
  const completedTodos = todos
    ? todos.filter((todo) => todo.isCompleted).length
    : 0;

  //getting the no of active todos
  const activeTodos = totalTodos - completedTodos;
  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitle}>Progress Stats</Text>

      <View style={settingsStyles.statsContainer}>
        {/* TOTAL TODOS   */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[settingsStyles.statCard, { borderLeftColor: colors.primary }]}
        >
          <View style={settingsStyles.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.primary}
              style={settingsStyles.statIcon}
            >
              <Ionicons name="list" size={20} color="white" />
            </LinearGradient>
          </View>

          <View>
            <Text style={settingsStyles.statNumber}>{totalTodos}</Text>
            <Text style={settingsStyles.statLabel}>Todos</Text>
          </View>
        </LinearGradient>

        {/* COMPLETED TODOS */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[settingsStyles.statCard, { borderLeftColor: colors.success }]}
        >
          <View style={settingsStyles.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.success}
              style={settingsStyles.statIcon}
            >
              <Ionicons name="checkmark" size={20} color="white" />
            </LinearGradient>
          </View>

          <View>
            <Text style={settingsStyles.statNumber}>{completedTodos}</Text>
            <Text style={settingsStyles.statLabel}>Completed Todos</Text>
          </View>
        </LinearGradient>

        {/* ACTIVE TODOS */}
        <LinearGradient
          colors={colors.gradients.background}
          style={[settingsStyles.statCard, { borderLeftColor: colors.warning }]}
        >
          <View style={settingsStyles.statIconContainer}>
            <LinearGradient
              colors={colors.gradients.warning}
              style={settingsStyles.statIcon}
            >
              <Ionicons name="time" size={20} color="white" />
            </LinearGradient>
          </View>

          <View>
            <Text style={settingsStyles.statNumber}>{activeTodos}</Text>
            <Text style={settingsStyles.statLabel}>Active Todos</Text>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default ProgressStats;
