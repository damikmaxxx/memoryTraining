import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import SvgHome from '../../../assets/svg/SvgHome';
import SvgLeftArrow from '../../../assets/svg/SvgLeftArrow';
import globalStyles from '../../utils/globalStyles';
import GradientColors, { GRADIENT_GREY_WHITE, GRADIENT_PURPLE, PURPLE_GRADIENT } from '../../utils/GradientColors/GradientColors';
export default function Container(props) {
    const { children, name = "undefined", showBack = true, showHome=true } = props;
    const navigation = useNavigation()
    let slicedName = name.slice(0, 15);
    if (slicedName.length < name.length) {
        slicedName += '...';
    }
    return (
        <View  style={styles.container}>
            <GradientColors color={GRADIENT_PURPLE} style={styles.headerPanel}>
                <View style={styles.header}>

                
                {showBack ?
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.arrow}>
                            <SvgLeftArrow  color="white"/>
                        </View>
                    </TouchableOpacity>
                    : <View></View>
                }
                <Text style={[styles.title,globalStyles.titleFonts]}>{slicedName}</Text>
                </View>
                {showHome ? <TouchableOpacity onPress={() => navigation.navigate("Title")}>
                        <View style={styles.arrow}>
                            <SvgHome  style={styles.home} color="white"/>
                        </View>
                    </TouchableOpacity>
                    : <View></View>}
            </GradientColors>
            <GradientColors color={GRADIENT_GREY_WHITE} style={styles.children}>
                {children}
            </GradientColors>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        zIndex:100,
    },
    arrow: {
        width: 30,
        height: 30,
        // display:"block"
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        marginRight:15,

    },
    home: {
        color: "white",
        width: 30,
        height: 30,
    },
    arrowText: {
        color: "white",
        width: 20,
        height: 20,
        
    },
    headerPanel: {
        height: 60,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        flexDirection: "row",
        paddingLeft: 15,
        color: "white",
        elevation:15,
    },
    header: {
        alignItems: "center",
        flexDirection: "row",
        
    },
    
    title: {
        color: "white",
        fontSize: 20,
    },
    children:{
        padding:0,
        flex: 1,
    }
})
