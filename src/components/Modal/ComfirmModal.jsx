import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import SvgLeftArrow from '../../../assets/svg/SvgLeftArrow';
import ButtonReqular from '../buttons/ButtonReqular';
import ContainerModal from './ContainerModal';
export default function ConfirmModal(props) {
    const { cancel, success, name, visible, title } = props;

    return (
        <ContainerModal visible={visible}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{name}</Text>
                    <View style={styles.buttons} >
                        <ButtonReqular title='Отмена' onPress={() => cancel()} />
                        <ButtonReqular title='Подтвердить' onPress={() => success()} />
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
    text:{
        fontSize: 15,
        marginBottom: 10,
        textAlign: "center",
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
