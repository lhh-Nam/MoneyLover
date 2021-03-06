import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Components
import LoginScreen from '../../screens/authentication/login';
import ChangePasswordScreen from '../../screens/authentication/changePassword';

const Stack = createStackNavigator();

export default AuthenticationStack = () => {
    console.log('authen');
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
        </Stack.Navigator>
    );
};