import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

function Login({ navigation }) {
    console.log('login');
    const onPressResetPassword = () => {
        navigation.navigate('ChangePasswordScreen');
    };
    return (
        <View>
            <View>
                <Text style={{ marginVertical: 10 }}>This is Login Screen</Text>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ padding: 10 }}
                    onPress={() => onPressResetPassword()}>
                    <Text>Reset password</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
