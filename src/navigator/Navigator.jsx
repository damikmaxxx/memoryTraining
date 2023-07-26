import SettingsScreen from "../screens/SettingsScreen";
import RepeatScreen from "../screens/RepeatScreen";
import TitleScreen from "../screens/TitleScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SvgHome from "../../assets/svg/SvgHome";
import SvgClock from "../../assets/svg/SvgClock";
import SvgSettings from "../../assets/svg/SvgSettings";
import AddCardScreen from "../screens/AddCardScreen";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import CardFoldersScreen from "../screens/CardFoldersScreen";
import MethodScreen from "../screens/MethodScreen";
import TrainingScreen from "../screens/TrainingScreen";
import ResultScreen from "../screens/ResultScreen";
import TabBlock from "../components/Block/TabBlock";

export default function Navigator() {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const TabStack = () => {
        return (
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,

                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#49516E',
                unmountOnBlur: true,
                tabBarStyle: [
                    {
                        position: "absolute",
                        backgroundColor: '#fff',
                        height: 100,
                        alignItems: "center",
                        elevation: 0,
                        borderColor: "black",
                        borderWidth: 1,
                    },
                    null
                ]
            }}>
                <Tab.Screen name="Title" component={TitleScreen} options={{ tabBarIcon: ({ color, focused }) => <TabBlock start={true} focused={focused}><SvgHome style={focused ? styles.activeIcon : styles.icon} color={color} /></TabBlock> }} />
                <Tab.Screen name="Repeat" component={RepeatScreen} options={{ tabBarIcon: ({ color, focused }) => <TabBlock focused={focused}><SvgClock style={focused ? styles.activeIcon : styles.icon} color={color} /></TabBlock> }} />
                <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarIcon: ({ color, focused }) => <TabBlock end={true} focused={focused}><SvgSettings style={focused ? styles.activeIcon : styles.icon} color={color} /></TabBlock> }} />
                
            </Tab.Navigator>
        );
    }


    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
                
            initialRouteName="Tab">
            <Stack.Screen name={"Tab"} component={TabStack} />
            <Stack.Screen name="CardFolders" component={CardFoldersScreen} />
            <Stack.Screen name="AddCard" component={AddCardScreen} />
            <Stack.Screen name="Method" component={MethodScreen} />
            <Stack.Screen name="Training" component={TrainingScreen} />
            <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>
    )

}
const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    },
    activeIcon: {
        width: 45,
        height: 45,
    },
    text: {
        backgroundColor: '#fff',
        textAlign: 'center',
        fontSize: 12,
    },

});