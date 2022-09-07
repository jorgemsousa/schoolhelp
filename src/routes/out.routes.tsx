import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignIn } from '../screens/SignIn'
import { Register } from '../screens/Register'
import { Forgot } from '../screens/Forgot'

const { Navigator, Screen } = createNativeStackNavigator();

export function OutRoutes() {
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name='signin' component={SignIn} />
            <Screen name='register' component={Register} />
            <Screen name='forgot' component={Forgot} />
        </Navigator>
    )
}