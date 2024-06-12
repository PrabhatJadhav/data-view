// Navigation.tsx
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ViewSingleEntry from '../components/ViewSingleEntry';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: {
    itemId: string;
    itemTitle: string;
    itemAge?: number;
    itemSalary?: number;
  };
};

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Employee Dummy'}}
        />
        <Stack.Screen
          name="Details"
          component={ViewSingleEntry}
          options={{title: 'Employee Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
