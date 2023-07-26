import { StyleSheet, View } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

export default function TabBlock(props) {
    const { children, focused, end = false, start = false } = props
    if (start) {
        return (
            focused ? <View style={[styles.tabWrapper, styles.start]}>
                <LinearGradient style={styles.activeLine} colors={['#9E66EA', '#5846BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}></LinearGradient>
                <LinearGradient style={[styles.insideWrapper]} colors={['#9E66EA', '#5846BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} >
                    {children}
                </LinearGradient>
            </View>
                :
                <View style={[styles.tabWrapper, styles.start]}>
                    <View style={[styles.insideWrapper]} >{children}</View>
                </View>
        )
    }
    if (end) {
        return (
            focused ? <View style={[styles.tabWrapper, styles.end]}>
                <LinearGradient style={styles.activeLine} colors={['#9E66EA', '#5846BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}></LinearGradient>
                <LinearGradient style={[styles.insideWrapper]} colors={['#9E66EA', '#5846BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} >
                    {children}
                </LinearGradient>
            </View>
                :
                <View style={[styles.tabWrapper, styles.end]}>
                    <View style={[styles.insideWrapper]} >{children}</View>
                </View>
        )
    }
    return (

        focused ? <View style={[styles.tabWrapper, styles.center]}>
            <LinearGradient style={styles.activeLine} colors={['#9E66EA', '#5846BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}></LinearGradient>
            <LinearGradient style={[styles.insideWrapper]} colors={['#9E66EA', '#5846BC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} >
                {children}
            </LinearGradient>
        </View>
            :
            <View style={[styles.tabWrapper, styles.center]}>
                <View style={[styles.insideWrapper]} >{children}</View>
            </View>


    )

}
const styles = StyleSheet.create({
    tabWrapper: {
        width: "100%",
        height: 100,
        backgroundColor: "#E5E6ED",
        borderColor: "#F8F8F8",
    },
    insideWrapper: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    start: {
        borderRightWidth: 7,
        borderLeftWidth: 0,
        borderColor: "#F8F8F8",
    },
    end: {
        borderRightWidth: 0,
        borderLeftWidth: 7,
        borderColor: "#F8F8F8",
    },
    center: {
        borderRightWidth: 3,
        borderLeftWidth: 3,
    },
    activeLine: {
        position: "absolute",
        width: "100%",
        height: 4,
        top: -8,
    }
});