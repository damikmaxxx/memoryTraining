import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import { LinearGradient } from 'react-native-svg';
import SvgLeftArrow from '../../../assets/svg/SvgLeftArrow';
import globalStyles from '../../utils/globalStyles';
import GradientColors, { GRADIENT_PURPLE } from '../../utils/GradientColors/GradientColors';
export default function ButtonReqular(props) {
    const {title, onPress } = props;

    return (
        <TouchableOpacity onPress={() => onPress()}>
            <GradientColors color={GRADIENT_PURPLE} style={styles.block}>
                <Text style={[styles.text,globalStyles.titleFonts]}>{title}</Text>
            </GradientColors>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    block: {
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:10,
        paddingHorizontal:15,
    },
    text:{
        color:"white",
        fontSize:16,
    }
})
