import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Container from '../components/Container/Container';
import { useSelector, useDispatch } from 'react-redux';
import FolderBlock from '../components/Block/FolderBlock';

export default function RepeatScreen(props) {
  const navigation = useNavigation()

  const clickButton = (ID) => navigation.navigate("Method",{id:ID});

  const foldersCards = useSelector((state) => state.foldersCards.item)
  return (
    <Container name={"Повторение"}>
        <Text style={styles.title}>
           Выберите папку, которую хотите повторить
        </Text>
          <FlatList  
            keyExtractor={item => item.id.toString()}
            data={foldersCards}
            renderItem={({ item }) =>
              (<FolderBlock settings={false} info={item}  click={clickButton}/>)
            }
          />
    </Container>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize:20,
    padding:5,
    textAlign:"center",
  },
});
