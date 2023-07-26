import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Container from '../components/Container/Container';
import SvgFolder from '../../assets/svg/SvgFolder';
import SvgClock from '../../assets/svg/SvgClock';
import SvgSettings from '../../assets/svg/SvgSettings';
import globalStyles from '../utils/globalStyles';
export default function TitleScreen(props) {
  const navigation = useNavigation()

  return (
    <Container showBack={false} showHome={false} name={"Главная"}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("CardFolders")}>
          <View style={styles.block}>
            <View style={styles.viewSvg}>
              <SvgFolder style={styles.svg} color={"#49516E"} />
            </View>
            <Text style={[styles.blockText, globalStyles.baseFonts, globalStyles.baseTextColor]}>Папки карточек</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Repeat")}>
          <View style={styles.block}>
            <View style={styles.viewSvg}>
              <SvgClock style={styles.svg} color={"#49516E"} />
            </View>
            <Text style={[styles.blockText, globalStyles.baseFonts, globalStyles.baseTextColor]}>Повторение</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <View style={styles.block}>
            <View style={styles.viewSvg}>
              <SvgSettings style={styles.svg} color={"#49516E"} />
            </View>
            <Text style={[styles.blockText, globalStyles.baseFonts, globalStyles.baseTextColor]}>Настройки</Text>
          </View>
        </TouchableOpacity>
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
  }
});
