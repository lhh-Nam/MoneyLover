import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Components
import SplashScreen from '../../screens/root/SplashScreen';

//Routes
import AuthenticationStack from '../authentication/AuthenticationStack';
import DrawerNavigation from '../drawer/DrawerNavigation';


const Stack = createStackNavigator();

const fadeAnimation = ({ current }) => ({
    cardStyle: {
        opacity: current.progress,
    },
});

function RootNavigation(props) {
    console.log('root');
    // const { isSplash, isSignin } = props;
    const isSplash = false;
    const isSignin = true;
    return (
        // <Stack.Navigator screenOptions={{ headerShown: false }}>
        //     {isSplash ? (
        //         <Stack.Screen name="SplashScreen" component={SplashScreen} />
        //     ) : isSignin ? (
        //         <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        //     ) : (
        //         <Stack.Screen name="Authentication" component={AuthenticationStack} options={{ cardStyleInterpolator: fadeAnimation }} />
        //     )}
        // </Stack.Navigator>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
            {/* <Stack.Screen name="Authentication" component={AuthenticationStack} options={{ cardStyleInterpolator: fadeAnimation }} /> */}

        </Stack.Navigator>
    );
}

export default RootNavigation;