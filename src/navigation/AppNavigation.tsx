import react from 'react'
import { View } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home/Home'
import { APP_ROUTES } from "../data/AppRoutes.ts"

const Stack = createStackNavigator()

export default function AppNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={APP_ROUTES?.home} component={Home}/>
        </Stack.Navigator>
    )
}

