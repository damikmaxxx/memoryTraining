import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Container from '../components/Container/Container';
import SvgFolder from '../../assets/svg/SvgFolder';
import SvgClock from '../../assets/svg/SvgClock';
import SvgSettings from '../../assets/svg/SvgSettings';
import SvgRandom from '../../assets/svg/SvgRandom';
import { RANDOM_METHOD } from '../lib/TrainingWithCard';

export default function MethodScreen(props) {
  const idFolder = props.route.params.id;
  const navigation = useNavigation()
  return (
    <Container name={"Метод"}>
      <View style={styles.titleBlock}>
      <Text style={[styles.title, globalStyles.baseFonts, globalStyles.baseTextColor]}> Выберите метод запоминания </Text>
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate("Training", { id: idFolder, method: RANDOM_METHOD })}>
        <View style={styles.block}>
          <View style={styles.viewSvg}>
            <SvgRandom style={styles.svg} color={"#49516E"} />
          </View>
          <Text style={[styles.blockText, globalStyles.baseFonts, globalStyles.baseTextColor]}>Случайные карточки</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.block}>
        <View style={styles.viewSvg}>
          <SvgSettings style={styles.svg} color={"#49516E"} />
        </View>
        <Text style={[styles.blockText, globalStyles.baseFonts, globalStyles.baseTextColor]}>Скоро...</Text>
      </View>
      <View style={styles.block}>
        <View style={styles.viewSvg}>
          <SvgSettings style={styles.svg} color={"#49516E"} />
        </View>
        <Text style={[styles.blockText, globalStyles.baseFonts, globalStyles.baseTextColor]}>Скоро...</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  block: {
    height: 90,
    alignItems: "center",
    padding: 5,
    flexDirection: "row",
    marginTop: 20,
    backgroundColor: "#E5E6ED"

  },
  blockText: {
    paddingLeft: 10,
    fontSize: 20,
  },
  viewSvg: {
    paddingHorizontal: 15,
  },
  svg: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize:20,
    textAlign:"center",
  },
  titleBlock: {
    padding:10,
  }
});
