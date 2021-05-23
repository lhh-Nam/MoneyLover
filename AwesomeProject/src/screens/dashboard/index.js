import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function DashboardScreen({ navigation, route }) {
    const onGoToDetail = () => {
        navigation.navigate('DashboardDetail', {
            title: 'Dashboard detail',
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <Text>
                This is Dashboard Screen with params:{' '}
                {route.params == undefined ? '' : route.params.url}
            </Text>
            <TouchableOpacity
                style={{
                    marginVertical: 10,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    backgroundColor: '#3383C3',
                }}
                onPress={onGoToDetail()}>
                <Text>Go to dashboard detail</Text>
            </TouchableOpacity>
        </View>
    );

}

export default DashboardScreen;