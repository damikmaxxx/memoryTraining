import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, TouchableOpacity, Button, Pressable, Animated } from 'react-native';
import Container from '../components/Container/Container';
import TrainingWithCard, { FINISH_TRAINING, translateMethodText } from '../lib/TrainingWithCard';
import { useSelector, useDispatch } from 'react-redux';
import globalStyles from '../utils/globalStyles';
import ButtonReqular from '../components/buttons/ButtonReqular';
export default function TrainingScreen(props) {
    const [card, setCard] = useState()
    const [rate, setRate] = useState("...")
    const method = props.route.params.method;
    const idFolder = props.route.params.id;

    const navigation = useNavigation()
    const folderCards = useSelector((state) => state.foldersCards.item.filter(item => item.id === idFolder))[0];
    const [cardGenerate, setCardGenerate] = useState(TrainingWithCard(method, folderCards))

    const success = () => {
        let newCard = cardGenerate.next(true)
        if (newCard.done) finish(newCard.value)
        else {
            setCard(newCard.value.randCard)
            setRate(newCard.value.rate.toFixed(1))
        }

    }

    const wrong = () => {
        let newCard = cardGenerate.next(false)
        if (newCard.done) finish(newCard.value)
        else {
            setCard(newCard.value.randCard)
            setRate(newCard.value.rate.toFixed(1))
        }

    }
    const fastFinish = () => finish(cardGenerate.next(FINISH_TRAINING).value)

    const finish = (result) => navigation.navigate("Result", { result, method, idFolder })

    useEffect(() => {
        let newCard = cardGenerate.next()
        setCard(newCard.value.randCard)
    }, [])

    let slicedName = folderCards.name.slice(0, 15);
    if (slicedName.length < folderCards.name.length) {
        slicedName += '...';
    }


    let [POS_HEADER, setPOS_HEADER] = useState(0);
    let start = 0;
    let posHeader = POS_HEADER;
    const PositionHeaderY = useRef(new Animated.Value(-100)).current;
    useEffect(() => {
        AnimatedMove(PositionHeaderY, 0, 500)
    }, [])
    const AnimatedMove = (block, pos, speed) => {
        Animated.timing(block, {
            toValue: pos,
            duration: speed,
            useNativeDriver: true,
        }).start();
    }



    return (
        <Container showBack={false} name={"Тренировка"}>
            <View style={styles.overflow}>


                <Animated.View

                    onStartShouldSetResponder={() => true}
                    onResponderStart={(event) => {
                        start = event.nativeEvent.pageY
                    }}
                    onResponderMove={(event) => {
                        let pos = posBlock - (start - event.nativeEvent.pageX)
                        if (pos < -WIDTH_DELETE_BLOCK) pos = -WIDTH_DELETE_BLOCK
                        if (pos > WIDTH_DELETE_BLOCK) pos = WIDTH_DELETE_BLOCK
                        PositionBlockX.setValue(pos)
                    }}
                    onResponderRelease={(event) => {
                        if (start === event.nativeEvent.pageX) {
                            click()
                            return
                        }
                        posBlock = posBlock + (event.nativeEvent.pageX - start)
                        if (posBlock < -WIDTH_DELETE_BLOCK / 2) posBlock = -WIDTH_DELETE_BLOCK
                        if (posBlock > -WIDTH_DELETE_BLOCK / 2 && posBlock <= WIDTH_DELETE_BLOCK / 2) posBlock = 0
                        else if (posBlock > WIDTH_DELETE_BLOCK / 2) posBlock = WIDTH_DELETE_BLOCK
                        AnimatedMove(PositionBlockX,posBlock,300)
                        setPOS_BLOCK(posBlock)
                    }}

                    style={[{

                        transform: [{
                            translateY: PositionHeaderY,
                        }],


                    }, styles.header]}
                >
                    <View style={styles.headerBlock}>
                        <Text style={[styles.headerText, globalStyles.baseTextColor, globalStyles.baseFonts]}>Время тренировки: 2:15</Text>
                    </View>
                    <View style={styles.headerBlock}>
                        <Text style={[styles.headerText, globalStyles.baseTextColor, globalStyles.baseFonts]}>Метод тренировки: {translateMethodText[method]}</Text>
                    </View>
                    <View style={styles.headerBlock}>
                        <Text style={[styles.headerText, globalStyles.baseTextColor, globalStyles.baseFonts]}>Папка карт: {slicedName} </Text>
                    </View>
                    <View style={styles.headerBlock}>
                        <Text style={[styles.headerText, globalStyles.baseTextColor, globalStyles.baseFonts]}>Процент запоминания: {rate} %</Text>
                    </View>
                </Animated.View>
            </View>
            <View style={styles.container}>
                <View style={styles.card}>

                    <Text style={[styles.cardText, globalStyles.baseTextColor, globalStyles.baseFonts]}>{card?.question}</Text>
                </View>
            </View>
            <View>
                <View style={styles.buttons}>
                    <ButtonReqular style={styles.button} title={"Не знаю"} onPress={wrong} />
                    <ButtonReqular style={styles.button} title={"Знаю"} onPress={success} />
                </View>
            </View>
            <View style={styles.finishButtonWrapper}>
                <Pressable style={styles.finishButton}  ><Text style={[styles.finishButtonText, globalStyles.baseTextColor, globalStyles.baseFonts]} onPress={fastFinish}>Завершить тренировку</Text></Pressable>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    overflow: {
        zIndex: 1,
        overflow: "hidden",
    },
    header: {
        zIndex: 2,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 5,
        backgroundColor: "#E5E6ED",
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
        paddingVertical: 10,
    },
    HeaderButtonWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: "center",
        overflow: "hidden",
    },
    HeaderButton: {
        width: 100,
        color: "green",
        borderWidth: 1,
        borderColor: "black",
        padding: 5,
    },
    HeaderButtonText: {
        textAlign: "center",
    },
    headerTimer: {
        // width: "100%",
    },
    TimerText: {
        fontSize: 20,
    },
    headerBlock: {
        width: "100%",
        padding: 5,
    },
    headerText: {
        fontSize: 20,
    },
    bottomLine: {
        borderBottomWidth: 1,
        borderColor: "black",
        paddingBottom: 10,
    },
    container: {
        // padding:5,
        alignItems: "center",
    },
    card: {
        width: "100%",
        padding: 10,
        minHeight: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E5E6ED",
        marginVertical: 30,

    },
    cardText: {
        textAlign: "center",
        fontSize: 20,
    },
    buttons: {

        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 40,
    },
    button: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    buttonText: {
        fontSize: 20,
    },
    finishButtonWrapper: {
        position: "absolute",
        alignItems: "center",
        bottom: 20,
        left: 10,
        right: 10,
    },
    finishButton: {

    },
    finishButtonText: {
        fontSize: 20,
    }
});
