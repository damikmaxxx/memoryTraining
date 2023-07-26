import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Pressable, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Children, useEffect, useRef, useState } from 'react';
import SvgCross from '../../../assets/svg/SvgCross';


export const  WIDTH_DELETE_BLOCK = 50
export default function ContainerBlock(props) {
    const {children, click, deleteBlock, settings = true} = props

    let [POS_BLOCK,setPOS_BLOCK] =  useState(0);
    let start = 0;
    let posBlock = POS_BLOCK;
    const PositionBlockX = useRef(new Animated.Value(-WIDTH_DELETE_BLOCK)).current;
    useEffect(() => {
        AnimatedMove(PositionBlockX,0,500)
    },[])
    const AnimatedMove = (block,pos,speed) => {
        Animated.timing(block, {
            toValue: pos,
            duration: speed,
            useNativeDriver:true,
          }).start();
    }
    return (
        <View
            style={{
                position: "relative",
                marginTop: 20,
            }}
        >
            { settings ?  <Pressable onPress={() => changeBlock()} style={styles.deleteBlock}><SvgCross style={styles.svg} color="#f1f1f1"/></Pressable> : <View></View>}
            { settings ?  <Pressable onPress={() => deleteBlock()} style={styles.deleteBlock}><SvgCross style={styles.svg} color="#f1f1f1"/></Pressable>  : <View></View>}

            
            {
                settings ? <Animated.View
                
                onStartShouldSetResponder={() => true}
                onResponderStart={(event) => {
                    start = event.nativeEvent.pageX
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
            
                
                style={{

                    transform: [{
                        translateX: PositionBlockX,
                    }],
                    zIndex: 2,

                }}
            >
                {children}
            </Animated.View> : <Pressable onPress={() => {click()}}>{children}</Pressable>
            }
            

        </View>

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