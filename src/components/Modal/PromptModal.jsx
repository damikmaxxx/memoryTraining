import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import SvgLeftArrow from '../../../assets/svg/SvgLeftArrow';
import globalStyles from '../../utils/globalStyles';
import ButtonReqular from '../buttons/ButtonReqular';
import ContainerModal from './ContainerModal';
export default function PromptModal(props) {
    const { cancel, success, name, visible, title } = props;

    const [value, setValue] = useState("")
    const clearText = (func) => {
        setValue("")
        func(value)
    }
    return (
        <ContainerModal visible={visible}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                style={[styles.input, globalStyles.baseFonts]}
                onChangeText={setValue}
                value={value}
                placeholder={name}
            />
            <View style={styles.buttons} >
                <ButtonReqular title='Отмена' onPress={() => clearText(cancel)} />
                <ButtonReqular title='Подтвердить' onPress={() => clearText(success)} />
            </View>
        </ContainerModal>
    )
}

const styles = StyleSheet.create({

    title: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        paddingHorizontal: 5,
        marginBottom: 20,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
    },
})
