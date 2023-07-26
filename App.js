import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Navigator from "./src/navigator/Navigator";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { StatusBar, Text } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from "expo-font";
import { useCallback, useEffect, useState } from "react";

const  fetchFont = () => {
  return Font.loadAsync({
    'Montserrat':require('./assets/fonts/Montserrat/Montserrat-Italic.ttf')
  })
}
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();  

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontLoaded,setfontLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Montserrat-Regular':require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
          'Montserrat-Bold':require('./assets/fonts/Montserrat/Montserrat-Bold.ttf')
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);
  if (appIsReady) {
    SplashScreen.hideAsync();
  }
  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
