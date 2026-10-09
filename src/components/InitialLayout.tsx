import { COLORS } from "@/constants/theme";
import { useConvexAuth } from "@convex-dev/auth/react";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function InitialLayout() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    const inAuthScreen = segments[0] === "(auth)";

    if (isAuthenticated) {
      if (inAuthScreen) {
        router.replace("/(app)");
      }
    } else {
      if (!inAuthScreen) {
        router.replace("/(auth)/login");
      }
    }

    SplashScreen.hideAsync();
  }, [isAuthenticated, isLoading, segments, router]);

  if (isLoading) {
    return null;
  }

  return (
    <Stack screenOptions={{
        headerStyle: { backgroundColor: COLORS.surface },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontWeight: "bold" },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: COLORS.surface },
      }}>
      <Stack.Screen name="(app)" options={{headerShown: false}} />
      <Stack.Screen name="(auth)" options={{headerShown: false}}/>
      <Stack.Screen
        name="new-room"
        options={{
          headerShown: true,
          presentation: "modal",
          title: "Нова кімната",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerShown: true,
          presentation: "modal",
          title: "Профіль",
        }}
      />
      <Stack.Screen
        name="chat/[id]"
        options={{
          headerShown: true,
          presentation: "modal",
          title: "Чат",
        }}
      />
      <Stack.Screen
        name="settings/[id]"
        options={{
          headerShown: true,
          presentation: "modal",
          title: "Інформація про кімнату",
        }}
      />
    </Stack>
  );
}