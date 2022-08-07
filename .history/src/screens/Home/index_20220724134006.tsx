import { HStack, IconButton, VStack } from 'native-base';
import Ionicons  from '@expo/vector-icons/Ionicons'

import Logo from '../../assets/logosecondary.svg'

export function Home() {
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
          icon={<Ionicons name="md"size={26} color="white"}
        />
      </HStack>
    </VStack>
  );
}