import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  HStack, 
  IconButton, 
  VStack, 
  useTheme, 
  Text, 
  Heading, 
  FlatList,
  Center,
} from 'native-base';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

import { ChatTeardropText } from 'phosphor-react-native'
import { SignOut } from 'phosphor-react-native'

import Logo from '../../assets/logosecondary.svg'

import { Filter } from '../../components/Filter'
import { Button } from '../../components/Button'
import { Lists, ListProps } from '../../components/Lists'

export function Home() {
  const navigation = useNavigation();

  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')
  const [students, setStudents] = useState<ListProps[]>([
    {
      id: "uuid-123-5467",
      name: "Jorge Sousa",
      when: "2022",
      status: 'open',
      school: "UFS",
      series: "5 Periodo",
      notas: 4,
      media: 6,
      disciplinas: ["Portugues", "Matematica"],
    },
  ])

  function handleNewStudent() {
    navigation.navigate("new");
  }

  
  function handleOpenDetails(id: string) {
    navigation.navigate('details', { id });
  }

  function handleLogout(){
    auth()
      .signOut()
      .catch(error => {
        return Alert.alert('Sair', 'Houve um erro ao sair.')
      })
  }

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
            <SignOut 
              size={26} 
              color={colors.gray[300]} 
            />
          }
          onPress={handleLogout}
        />
      </HStack>
      
      <VStack flex={1} px={6}>
        <HStack 
          w="full" 
          mt={4}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">
            Alunos
          </Heading>
          <Text color="gray.200">
            {students.length}
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
          data={students}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Lists data={item} onPress={() => handleOpenDetails(item.id)} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingTop: 10, paddingBottom: 100}}
          ListEmptyComponent={() => (
            <Center mt={4}>
              <ChatTeardropText 
                size={40} 
                color={colors.gray[300]} 
              />
              <Text 
                color="gray.300"
                fontSize="xl"
                mt={6}
                textAlign="center"
              >
                Você ainda não possui {'\n'}
                Alunos {statusSelected === 'open' ? 'em andamento!' : 'finalizados'}
              </Text>
            </Center>
          )}
        />
        <Button title="Novo Aluno" onPress={handleNewStudent}/>
      </VStack>
    </VStack>
  );
}