import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import { IconCog, IconSignOut } from '../../../assets/icons';

function DrawerFooter({ navigation }) {
    const onSettings = () => {
        navigation.navigate('SettingScreen', {
            title: 'Settings',
        });
    };

    const onLogout = () => {
        // const { setSignin } = global;
        // setSignin();
    };

    return (
        <View style={styles.conatiner}>
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => onSettings()}>
                <Text style={styles.itemText}>
                    <IconCog size={16} /> Settings
          </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemContainer} onPress={() => onLogout()}>
                <Text style={styles.itemText}>
                    <IconSignOut size={16} /> Logout
          </Text>
            </TouchableOpacity>
        </View>
    );

}

export default withNavigation(DrawerFooter);

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'space-evenly',
        borderTopWidth: 0.5,
        borderTopColor: '#E5E5E5',
        paddingVertical: 5,
    },
    itemContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    itemText: {
        fontSize: 16,
    },
});