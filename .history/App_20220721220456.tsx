import { NativeBaseProvider } from 'native-base'

import { THEME } from './src/styles/theme'

import { SignIn } from ''

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <SignIn />
    </NativeBaseProvider>
  );
}

