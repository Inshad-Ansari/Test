import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { localImages } from '../utils/constant';
import HomeScreen from '../screen/afterBording/HomeScreen'
import DrawerScreen from '../screen/afterBording/DrawerScreen'
import ProfileScreen from '../screen/afterBording/ProfileScreen'
import SettingScreen from '../screen/afterBording/SettingScreen'
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator();

const TabStack = () => <>
    <Tab.Navigator
        screenOptions={({ route: { name } }) => ({
            tabBarIcon: ({ focused }) => {
                switch (name) {

                    case 'HomeScreen':
                        return <Image source={focused ? localImages.home_a : localImages.home_in} style={{ width: 30, height: 30 }} />

                    case 'ProfileScreen':
                        return <Image source={focused ? localImages.myorder_a : localImages.myorder_in} style={{ width: 30, height: 30 }} />
                    case 'SettingScreen':
                        return <Image source={focused ? localImages.settings_a : localImages.settings_in} style={{ width: 30, height: 30 }} />
                }


            },
        })}
        tabBarOptions={{
            showLabel: false,
            animationEnabled: false
        }}
    >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        <Tab.Screen name="SettingScreen" component={SettingScreen} />

    </Tab.Navigator>
</>


const DrawerStack = () => <>
    <Drawer.Navigator initialRouteName="TabStack" drawerContent={props => <DrawerScreen {...props} />}>
        <Drawer.Screen
            name="TabStack"
            component={TabStack}
        />
    </Drawer.Navigator>


</>


const AfterBoardingStack = () => <>
    <Stack.Navigator screenOptions={{
        headerShown: false,
        animationEnabled: false
    }}  >
        <Stack.Screen
            name="DrawerStack"
            component={DrawerStack}
        />
        {/* <Stack.Screen name="SettingScreen" component={SettingScreen} /> */}

    </Stack.Navigator>
</>

export default AfterBoardingStack