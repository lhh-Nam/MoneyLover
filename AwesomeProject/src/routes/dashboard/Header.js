import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import { IconBar, IconArrowLeft } from '../../assets/icons';

function Header({ navigation, scene }) {
    const { route } = scene;
    const { name, params } = route;

    const onOpenDrawer = () => {
        navigation.openDrawer();
    };

    const onGoBack = () => {
        navigation.goBack();
    };

    const renderHeaderButton = (name, params) => {
        switch (name) {
            case 'DashboardDetail':
                return (
                    <TouchableOpacity
                        style={{ paddingHorizontal: 10 }}
                        onPress={onGoBack()}>
                        <IconArrowLeft size={18} />
                    </TouchableOpacity>
                );
            default:
                return (
                    <TouchableOpacity
                        style={{ paddingHorizontal: 10 }}
                        onPress={onOpenDrawer()}>
                        <IconBar size={18} />
                    </TouchableOpacity>
                );
        }
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
                {renderHeaderButton(name, params)}
                <Text style={{ fontSize: 18 }}>
                    {params == undefined ? '' : params.title}
                </Text>
            </View>
        </SafeAreaView>
    );

}

export default Header;