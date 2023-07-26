import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import globalStyles from '../utils/globalStyles';
export default function CreateItemButton(props) {
  const { children, click, text } = props;
  return (
    <TouchableOpacity onPress={() => click()}>
      <View style={styles.newBlockWrapper}>
        <View style={styles.newBlock}>
          <Text style={[styles.newBlockText, globalStyles.baseFonts,globalStyles.baseTextColor]}>{text} </Text>
          {children}
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  newBlockWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  newBlock: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "85%",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  newBlockText: {
    paddingLeft: 0,
    paddingRight: 10,
    fontSize: 20,
  },
  wrapperList: {
    flex: 1,
  }

});