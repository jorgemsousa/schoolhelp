import { NativeBaseProvider } from 'native-base'
import { SignIn } from './src/screens/Signin'

import {} from './src/styles/'

export default function App() {
  return (
    <NativeBaseProvider>
      <SignIn />
    </NativeBaseProvider>
  );
}

