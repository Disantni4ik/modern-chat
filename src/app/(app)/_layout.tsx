import { COLORS } from "@/constants/theme";
import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack screenOptions={{
        headerStyle: { backgroundColor: COLORS.surface },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontWeight: "bold" },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: COLORS.surface },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Чат-кімнати",
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen
        name="user/[id]"
        options={{
          title: "Профіль учасника",
          headerBackTitle: 'Назад',
        }}
      />
      
    </Stack>
  );
}
