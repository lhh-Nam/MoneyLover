import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from '@react-navigation/compat';
import { IconTachometer, IconAddressBook } from '../../../assets/icons';

function DrawerBody({ navigation }) {
    const onGoToDashboard = () => {
        navigation.navigate('DashboardScreen', {
            title: 'Dashboard',
        });
    };

    const onGoToContacts = () => {
        navigation.navigate('ContactScreen', {
            title: 'Contacts',
        });
    };

    return (
        <View style={{ flex: 7 }}>
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => onGoToDashboard()}>
                <Text style={styles.itemText}>
                    <IconTachometer size={16} /> Dashboard
          </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => onGoToContacts()}>
                <Text style={styles.itemText}>
                    <IconAddressBook size={16} />  Contacts
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default withNavigation(DrawerBody);

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