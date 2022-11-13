import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { 
    Heading, 
    HStack, 
    VStack, 
    useTheme, 
    ScrollView,
} from "native-base";

import { 
    Hourglass, 
    CircleWavyCheck, 
    User,
    ListChecks
} from 'phosphor-react-native';

import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { FilterDisciplines } from '../../components/FilterDisciplines'



type RouteParams = {
    id: string,
}

export function Details() {
    const { colors } = useTheme();
    const route = useRoute();

    const { id } = route.params as RouteParams;

    const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')

    const userFake = {
        id: "uuid-123-5467",
        name: "Jorge Sousa",
        when: "2022",
        status: 'open',
        school: "UFS",
        series: "5 Periodo",
        notas: 4,
        media: 6,
        disciplinas: [
            { disciplina: "Portugues", 
              notas: [
                {nota:"6", atividade: "2"}, 
                {nota:"", atividade: ""},
                {nota:"", atividade: ""},
                {nota:"", atividade: ""}
              ]
            }, 
            { disciplina: "Matematica", 
              notas: [
                {nota:"6", atividade: "3"}, 
                {nota:"4", atividade: ""},
                {nota:"", atividade: ""},
                {nota:"", atividade: ""}
              ]
            },
            { disciplina: "História", 
              notas: [
                {nota:"6", atividade: "2"}, 
                {nota:"", atividade: ""},
                {nota:"", atividade: ""},
                {nota:"", atividade: ""}
              ]
            }, 
            { disciplina: "Geografia", 
              notas: [
                {nota:"6", atividade: "3"}, 
                {nota:"4", atividade: ""},
                {nota:"", atividade: ""},
                {nota:"", atividade: ""}
              ]
            }           
        ],
    }
    
    function handleOpenNotes(disciplina: string) {       
       const data = userFake.disciplinas.filter((item) => item.disciplina === disciplina).map((nota) => {
            nota.notas
       })
    }

    return(
    <VStack flex={1} bg="gray.700" >
        <Header title="Acompanhamento" />
        <HStack w="full" bg="gray.500" p={3} justifyContent="center" alignItems="center" space={2}>
            { statusSelected === 'open' ? 
            <>
                <Hourglass color={colors.secondary[700]}/> 
                <Heading color={colors.secondary[700]} fontSize={14} textTransform="uppercase" >
                    em andamento
                </Heading> 
            </> : 
            <>
                <CircleWavyCheck color={colors.green[500]}/>    
                <Heading color={colors.green[500]} fontSize={14} textTransform="uppercase" >
                    fechado
                </Heading>
            </>
            }            
        </HStack>
        <ScrollView >
            <VStack paddingX={3}>
                <VStack w="full" mt={3} p={5} bg="gray.600">
                    <HStack w="full" alignItems="center" space={2}> 
                        <User color={colors.primary[700]} size={15}/>
                        <Heading color="gray.300" fontSize={12} textTransform="uppercase">aluno</Heading>
                    </HStack>
                    <Heading color="gray.100" fontSize={14} mt={1}>{userFake.name.toUpperCase()}</Heading>
                </VStack>
                <VStack w="full" mt={3} p={5} bg="gray.600">
                    <HStack w="full" alignItems="center" space={2}> 
                        <ListChecks color={colors.primary[700]} size={15}/>
                        <Heading color="gray.300" fontSize={12} textTransform="uppercase" >disciplinas</Heading>
                    </HStack>     
                    <HStack w="full" alignItems="flex-start" space={1} flexWrap="wrap"> 
                        {userFake.disciplinas.map((item) => (
                            <FilterDisciplines 
                                key={item.disciplina}
                                title={item.disciplina} 
                            />                        
                        ))}                       
                    </HStack>                 
                </VStack>
                <HStack w="full" mt={3} p={5} bg="gray.600" space={2}> 
                        <CircleWavyCheck color={colors.primary[700]} size={15}/>
                        <Heading color="gray.300" fontSize={12} >HISTÓRICO DE NOTAS</Heading>
                </HStack>
                
                {
                    statusSelected === 'open' ?
                        <HStack w="full" alignItems="center" space={2} justifyContent="space-between">
                            <Button title="Salvar" w="55%" mt={4} mb={4}/>   
                            <Button title="Fechar" w="40%" mt={4} mb={4} bg={colors.green[900]}/>   
                        </HStack>
                    : null
                }
            </VStack>
        </ScrollView>
    </VStack>
   ) 
}