import React, { useEffect } from 'react';
import { View, Image, Dimensions } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { screenSwitching } from '../../redux/action/LoginAction';

export default function SplashScreen({ navigation }) {
    const SCREEN_WIDTH = Dimensions.get('screen').width;
    //const dispatch = useDispatch();

    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(screenSwitching());
    //     }, 2000);
    // }, []);

    useEffect(() => {
        setTimeout(() => {
            //dispatch(screenSwitching());
            navigation.navigate('Authentication', { screen: 'LoginScreen' });
        }, 2000);
    }, []);



    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
            }}>
            <Image
                style={{
                    width: SCREEN_WIDTH - 60,
                    height: 'auto',
                    aspectRatio: 3 / 2, //WIDTH/HEIGHT
                }}
                source={require('../../assets/images/logo.png')}
            />
        </View>
    );
}