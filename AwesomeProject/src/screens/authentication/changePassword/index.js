import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

function ChangePassword({ navigation }) {
    const onGoBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text>This is Change Password Screen</Text>
                <TouchableOpacity onPress={onGoBack()}>
                    <Text>Go back</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ChangePassword
