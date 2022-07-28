
import { HStack, IconButton, VStack, useTheme, Text, Heading } from 'native-base';
import Ionicons  from '@expo/vector-icons/Ionicons'

import Logo from '../../assets/logosecondary.svg'

import { Filter } from '../../components/Filter'

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
              size={26} 
              color={colors.gray[300]} 
            />
          }
        />
      </HStack>
      
      <VStack flex={1} px={6}>
        <HStack 
          w="full" 
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">
            Lista de Alunos
          </Heading>
          <Text color="gray.200">
            9
          </Text>
        </HStack>
        <HStack space={3}>
          <Filter 
            title="Fechado" 
            type="closed"
          />
          <Filter 
            title="em andamento" 
            type="closed"
          />
        </HStack>
      </VStack>
    </VStack>
  );
}