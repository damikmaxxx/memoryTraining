import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Container from '../components/Container/Container';

export default function SettingsScreen(props) {
  const navigation = useNavigation()
  return (
    <Container name={"Настройки"}>

    </Container>
  );
}

const styles = StyleSheet.create({

});
