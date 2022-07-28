import { NativeBaseProvider } from 'native-base'
import { SignIn } from './src/screens/Signin'

import {} from ''

export default function App() {
  return (
    <NativeBaseProvider>
      <SignIn />
    </NativeBaseProvider>
  );
}

