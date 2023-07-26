import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Container from '../components/Container/Container';
import { useSelector, useDispatch } from 'react-redux';
import FolderBlock from '../components/Block/FolderBlock';

export default function ResultScreen(props) {
  const navigation = useNavigation()
  const {result} = props.route.params;
  const clickButton = (ID) => navigation.navigate("Method",{id:ID});

  const foldersCards = useSelector((state) => state.foldersCards.item)
  return (
    <Container showBack={false} name={"Результат"}>
        <Text style={styles.title}>
           Правильных ответов:{result.correct},
           неправильных ответов:{result.incorrect}
        </Text>
          {/* <FlatList  
            keyExtractor={item => item.id.toString()}
            data={foldersCards}
            renderItem={({ item }) =>
              (<FolderBlock info={item}  click={clickButton}/>)
            }
          /> */}
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
