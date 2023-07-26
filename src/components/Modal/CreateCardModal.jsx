import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import SvgLeftArrow from '../../../assets/svg/SvgLeftArrow';
import globalStyles from '../../utils/globalStyles';
import ButtonReqular from '../buttons/ButtonReqular';
import ContainerModal from './ContainerModal';
export default function CreateCardModal(props) {
    const { cancel, success, name, visible, placeholder = "" } = props;

    const [valueQuestion, setValueQuestion] = useState("")
    const [valueAnswer, setValueAnswer] = useState("")
    const clearText = (func) => {
        setValueQuestion("")
        setValueAnswer("")
        func(valueQuestion, valueAnswer)
    }
    return (
        <ContainerModal visible={visible}>
            <Text style={styles.title}>Заполните новую карту</Text>
            <TextInput
                style={[styles.input, globalStyles.baseFonts]}
                onChangeText={setValueQuestion}
                value={valueQuestion}
                placeholder={"Вопрос:"}
            />
            <TextInput
                style={[styles.input, globalStyles.baseFonts]}
                onChangeText={setValueAnswer}
                value={valueAnswer}
                placeholder={"Ответ:"}
            />
            <View style={styles.buttons} >
                <ButtonReqular title='Отмена' onPress={() => clearText(cancel)} />
                <ButtonReqular title='Подтвердить' onPress={() => clearText(success)} />
            </View>
        </ContainerModal>

    )
}

const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000020"
    },
    modal: {
        width: 330,
        position: "absolute",
        backgroundColor: "white",
        padding: 10,
        paddingTop: 15,
        elevation: 3,
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
    },
    text: {
        fontSize: 15,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        padding: 5,
        marginBottom: 20,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
    },
})
