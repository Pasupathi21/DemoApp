
import { useEffect, useState } from 'react'
import Login from './src/screens/authentication/Login'
import AppNavigation from './src/navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const checkLoggedIn = async () => {
    setIsLoggedIn(!!await AsyncStorage.getItem("isLoggedIn"))
  }
  useEffect(() => {
    checkLoggedIn()
  }, [])

  return (
    <>
      <SafeAreaView>

        {
          isLoggedIn ? (
            <NavigationContainer>
              <AppNavigation />
            </NavigationContainer>
          ) :
            <Login />
        }
      </SafeAreaView>
    </>
  )
}

export default App