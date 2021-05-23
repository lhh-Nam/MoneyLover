import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import DrawerHeader from './DrawerHeader';
import DrawerBody from './DrawerBody';
import DrawerFooter from './DrawerFooter';

function DrawerContent() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <DrawerHeader />
                <DrawerBody />
                <DrawerFooter />
            </View>
        </SafeAreaView>
    );
}

export default DrawerContent;