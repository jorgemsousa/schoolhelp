import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Details } from '../screens/Details'
import { Students } from '../screens/Students'

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name='home' component={Home} />
            <Screen name='new' component={Students} />
            <Screen name='details' component={Details} />
        </Navigator>
    )
}