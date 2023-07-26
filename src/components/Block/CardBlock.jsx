import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Pressable, Animated } from 'react-native';
import { useRef, useState } from 'react';
import ContainerBlock, { WIDTH_DELETE_BLOCK } from './ContainerBlock';

export default function CardBlock(props) {

    const [isQuestion, setIsQuestion] = useState(true)
    const { info, deleteThisBlock} = props
    const changeQuestion = () => setIsQuestion(!isQuestion)
    const cardDelete = () =>  deleteThisBlock(info.id)

    return (
        <ContainerBlock click={changeQuestion} deleteBlock={cardDelete}>
            <View style={[styles.block]}>
                {isQuestion ? <Text style={[styles.blockText, globalStyles.baseFonts, globalStyles.baseTextColor]}>{info.question}</Text> :
                    <Text style={[styles.blockText, globalStyles.baseFonts, globalStyles.baseTextColor]}>{info.answer}</Text>
                }
            </View>
        </ContainerBlock>



    )
}

const styles = StyleSheet.create({
    block: {
        alignItems: "center",
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "row",
        padding: 20,
        backgroundColor: "#E5E6ED"
    },
    blockText: {
        paddingLeft: 10,
        fontSize: 20,
    },
    deleteBlock: {
        position: "absolute",
        zIndex: 1,
        width: WIDTH_DELETE_BLOCK,
        height: "100%",
        backgroundColor: "#FF7777",
        justifyContent: "center",
        alignItems: "center",
        right: 0,
    },
    svg: {
        width: 19,
        height: 19,
    },
});