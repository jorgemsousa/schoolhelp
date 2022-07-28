import { NativeBaseProvider } from 'native-base'
import { useFonts, Roboto_400Regular, Robo} from '@expo-google-fonts/roboto'

import { THEME } from './src/styles/theme'

import { SignIn } from './src/screens/SignIn'

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <SignIn />
    </NativeBaseProvider>
  );
}

