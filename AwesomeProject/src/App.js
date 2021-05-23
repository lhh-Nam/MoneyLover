import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './routes/root/RootNavigation';

export default function App() {
  console.log('app')
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}