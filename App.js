/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './components/screens/login'
import { Inspection } from './components/screens/inspection';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Fixtures } from './components/screens/fixtures';
import { Theme } from './theme';
import { AddFixture } from './components/screens/add-fixture';

export const routes = {
  login: 'login',
  fittings: 'fittings',
  inspection: 'inspection',
  addFitting: 'addFitting'
};

const App = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createMaterialTopTabNavigator();

  function Tabs() {
    return (
      <Tab.Navigator screenOptions={{
        tabBarLabelStyle: { color: Theme.colors.background },
        tabBarStyle: { backgroundColor: Theme.colors.primary },
        tabBarIndicatorStyle: { backgroundColor: Theme.colors.accent }
      }}>
        <Tab.Screen name="Property Info" component={Inspection} />
        <Tab.Screen name={routes.fittings} options={{ tabBarLabel: 'Fittings/Fixtures' }} component={Fixtures} />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={routes.inspection} component={Tabs} options={{
          headerShown: true, headerTintColor: Theme.colors.background,
          headerStyle: { backgroundColor: Theme.colors.primary }
        }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name={routes.addFitting} component={AddFixture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
