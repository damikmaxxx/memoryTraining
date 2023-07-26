import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Container from '../components/Container/Container';

export default function CardsScreen(props) {
  
  const navigation = useNavigation()
  return (
    <Container name={"Карточки"}>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Text>
           перейти в настройки 
        </Text>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
});
