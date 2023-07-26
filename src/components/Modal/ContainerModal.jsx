import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import SvgLeftArrow from '../../../assets/svg/SvgLeftArrow';
import ButtonReqular from '../buttons/ButtonReqular';
export default function ContainerModal(props) {
    const { children, visible } = props;

    return (
        <Modal visible={visible} transparent onRequestClose={() => cancel()}>
            <View style={styles.centeredView}>
                <View style={styles.modal}>
                    {children}
                </View>
            </View>
        </Modal>
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
        borderRadius:20,
    },
})
