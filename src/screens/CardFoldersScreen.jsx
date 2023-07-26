import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, SafeAreaView } from 'react-native';
import SvgFolderPlus from '../../assets/svg/SvgFolderPlus';
import Container from '../components/Container/Container';
import FolderBlock from '../components/Block/FolderBlock';
import PromptModal from '../components/Modal/PromptModal';
import { deleteFolder, setNewFolder } from '../store/reducers/FoldersCardsSlice';
import { useSelector,useDispatch } from 'react-redux';
import ConfirmModal from '../components/Modal/ComfirmModal';
import CreateItemButton from '../components/CreateItemButton';

export default function CardFoldersScreen(props) {
  const dispatch = useDispatch()

  const navigation = useNavigation()
  const [modalActiveAdd, setModalAdd] = useState(false)
  const [modalActiveDelete, setModalDelete] = useState(false)
  const [idDelete, setIdDelete] = useState(null)
  const changeActiveModalAdd = () => setModalAdd(!modalActiveAdd)
  const closeActiveModalDelete = () => setModalDelete(false)
  const openActiveModalDelete = () => setModalDelete(true)

  const addFolder = text => {
    const newId = new Date().valueOf()
    const newFolder = {
      id:newId,
      name:text,
    }
    dispatch(setNewFolder(newFolder))
    navigation.navigate("AddCard",{id:newId});
  }
  const confirmDelete = (idFolder) => {
    setIdDelete(idFolder)
    openActiveModalDelete()
  }

  const deleteThisFolder = () => {
    dispatch(deleteFolder(idDelete))
    setIdDelete()
    closeActiveModalDelete()
  }

  const clickButton = (ID) => navigation.navigate("AddCard", { id: ID})
  const foldersCards = useSelector((state) => state.foldersCards.item)

  return (
    <Container name={"Папки карточек"} >
      <PromptModal visible={modalActiveAdd} title={"Введите название новой папки"} success={addFolder} cancel={changeActiveModalAdd} name={"Введите название папки"} />
      <ConfirmModal visible={modalActiveDelete} title={"Удаление папки"} success={deleteThisFolder} cancel={closeActiveModalDelete} name={"Вы уверены что хотите удалить папку '"+ foldersCards?.filter((item) => item.id === idDelete)[0]?.name +"' ? "} />
      <View  style={styles.wrapperList}>
        <CreateItemButton click={changeActiveModalAdd}  text={"Создать новую папку"}><SvgFolderPlus color="black" /></CreateItemButton>
          <FlatList  
            keyExtractor={item => item.id.toString()}
            data={foldersCards}
            renderItem={({ item }) =>
              (<FolderBlock info={item} deleteThisFolder={confirmDelete} click={clickButton}/>)
            }
          />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  wrapperList:{
    flex: 1,
    
  }

});