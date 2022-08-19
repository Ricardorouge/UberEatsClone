import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import RootNavigator from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "./src/contexts/AuthContext";

import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native/dist/Auth";

import config from "./src/aws-exports";

Amplify.configure({ ...config, Analytics: { disabled: true } });

function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <RootNavigator />
      </AuthContextProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default withAuthenticator(App);
