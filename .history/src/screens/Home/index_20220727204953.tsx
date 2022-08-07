import { useState } from 'react';
import { HStack, IconButton, VStack, useTheme, Text, Heading, FlatList } from 'native-base';
import Ionicons  from '@expo/vector-icons/Ionicons'

import Logo from '../../assets/logosecondary.svg'

import { Filter } from '../../components/Filter'
import { Button } from '../../components/Button'
import { Lists, ListProps } from '../../components/Lists'

export function Home() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')
  const [orders, setOrders] = useState<ListProps[]>([
    { 
      id: '1',
      name: 'Jorge Sousa',
      when:'20/01/2022',
      school: 'UFS',
      series: '6º Período',
      notas: 4,
      media: 6,
      disciplinas: [
        'Portugues', 'Matematica', 'Geografia'
      ],
      status: 'open'
    },
    { 
      id: '1',
      name: 'Jorge Sousa',
      when:'20/01/2022',
      school: 'UFS',
      series: '6º Período',
      notas: 4,
      media: 6,
      disciplinas: [
        'Portugues', 'Matematica', 'Geografia'
      ],
      status: 'open'
    },
    { 
      id: '1',
      name: 'Jorge Sousa',
      when:'20/01/2022',
      school: 'UFS',
      series: '6º Período',
      notas: 4,
      media: 6,
      disciplinas: [
        'Portugues', 'Matematica', 'Geografia'
      ],
      status: 'open'
    },
    { 
      id: '1',
      name: 'Jorge Sousa',
      when:'20/01/2022',
      school: 'UFS',
      series: '6º Período',
      notas: 4,
      media: 6,
      disciplinas: [
        'Portugues', 'Matematica', 'Geografia'
      ],
      status: 'open'
    },
    { 
      id: '1',
      name: 'Jorge Sousa',
      when:'20/01/2022',
      school: 'UFS',
      series: '6º Período',
      notas: 4,
      media: 6,
      disciplinas: [
        'Portugues', 'Matematica', 'Geografia'
      ],
      status: 'open'
    },
  ])

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
            title="em andamento" 
            type="open"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter 
            title="fechado" 
            type="closed"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>
        <FlatList 
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Lists data={item} />}
          showsVerticalScrollIndicator={false}
          conte
        />
        <Button title="Novo Aluno"/>
      </VStack>
    </VStack>
  );
}