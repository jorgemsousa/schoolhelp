import { HStack, IconButton, VStack, useTheme } from 'native-base';
import Ionicons  from '@expo/vector-icons/Ionicons'

import Logo from '../../assets/logosecondary.svg'

export function Home() {

  const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack 
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />
        <IconButton 
          icon={
            <Ionicons 
              name="md-exit-outline"
              size={26} color={colors.gray[300]} />}
        />
      </HStack>
    </VStack>
  );
}