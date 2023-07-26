import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import Container from '../components/Container/Container';
import { useSelector, useDispatch } from 'react-redux';
import CardBlock from '../components/Block/CardBlock';
import SvgPlusSquare from '../../assets/svg/SvgPlusSquare';
import CreateCardModal from '../components/Modal/CreateCardModal';
import { deleteCard, setNewCard } from '../store/reducers/FoldersCardsSlice';
import CreateItemButton from '../components/CreateItemButton';

export default function AddCardScreen(props) {
  const dispatch = useDispatch()

  const idFolder = props.route.params.id;
  const [modalActive, setModalActive] = useState(false)
  const changeActiveModal = () => setModalActive(!modalActive)

  const addCard = (FirstText, SecondText) => {
    const newId = new Date().valueOf()
    const newCard = {
      id: newId,
      question: FirstText,
      answer: SecondText,
    }
    dispatch(setNewCard({ idFolder, newCard }))
  }

  const deleteThisBlock = (idCard) => dispatch(deleteCard({ idFolder, idCard }))
  const folderCards = useSelector((state) => state.foldersCards.item.filter((item) => item.id === idFolder))[0]
  
  return (
    <Container name={folderCards?.name}>
      <CreateCardModal visible={modalActive} success={addCard} cancel={changeActiveModal} name={"Введите название карты"} />
      <CreateItemButton click={changeActiveModal} text={"Создать новую карту"}><SvgPlusSquare color="black" /></CreateItemButton>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={folderCards?.cards}
        renderItem={({ item }) =>
          (<CardBlock info={item} deleteThisBlock={deleteThisBlock} />)
        }
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  newBlock: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    flexDirection: "row",
    marginBottom: 10,

  },
  newBlockText: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
  },
});
