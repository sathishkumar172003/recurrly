import "@/app/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
     <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/(auth)/login" className="mt-4 text-lg text-primary">
        Go to Login
      </Link>
      <Link href="/(auth)/register" className="mt-4 text-lg text-primary">
        Go to Register
      </Link>
    </View>
  );
}
