import { NativeBaseProvider } from 'native-base'
import { SignIn } from './src/screens/Signin'

import {} from './src/'

export default function App() {
  return (
    <NativeBaseProvider>
      <SignIn />
    </NativeBaseProvider>
  );
}

