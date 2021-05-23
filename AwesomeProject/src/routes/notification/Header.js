import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import { IconBar } from '../../assets/icons';

export default function Header({ navigation }) {
    const onOpenDrawer = () => {
        navigation.openDrawer();
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#FFFFFF' }}>
            <View
                style={{
                    height: 45,
                    backgroundColor: '#FFFFFF',
                    borderBottomWidth: 1,
                    borderBottomColor: '#E5E5E5',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                <TouchableOpacity
                    style={{ paddingHorizontal: 10 }}
                    onPress={onOpenDrawer()}>
                    <IconBar size={18} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18 }}>Notification</Text>
            </View>
        </SafeAreaView>
    );
}