import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Pressable, Animated, Easing, useWindowDimensions } from 'react-native';
import globalStyles from '../../utils/globalStyles';

import ContainerBlock, { WIDTH_DELETE_BLOCK } from './ContainerBlock';

export default function FolderBlock(props) {

    const { info, deleteThisFolder, click,settings } = props

    let slicedName = info.name.slice(0, 50);
    if (slicedName.length < info.name.length) slicedName += '...';

    const folderClick = () => click(info.id)
    const folderDelete = () => deleteThisFolder(info.id)

    return (
        <ContainerBlock click={folderClick} deleteBlock={folderDelete} settings={settings}>
            <View style={[styles.block]}>
                <Text style={[styles.blockText, globalStyles.baseFonts, globalStyles.baseTextColor]}>{slicedName}</Text>
                <View style={styles.leftBlock}>

                    <Text style={[styles.blockText, globalStyles.baseFonts]}>{info?.cards?.length ? info?.cards?.length : 0}</Text>
                </View>
            </View>
        </ContainerBlock>

    )
}

const styles = StyleSheet.create({
    block: {
        alignItems: "center",
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "row",
        padding: 20,
        backgroundColor: "#E5E6ED",

    },
    blockText: {
        paddingRight: 10,
        fontSize: 18,
        width: "95%",
    },
    leftBlock: {
        paddingleft: 5,
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