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
import { ListsNotes } from "../../components/ListsNotes";
import { ButtonSecondary } from "../../components/ButtonSecondary";
import { Input } from '../../components/Input';



type RouteParams = {
    id: string,
}

export function Details() {
    const { colors } = useTheme();
    const route = useRoute();

    const { id } = route.params as RouteParams;

    const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')
    const [pressed, setPressed] = useState('');
    const [note, setNote] = useState([]);
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
            { disciplina: "Quimica", 
              notas: [
                {nota:"6", atividade: "2"}, 
                {nota:"", atividade: ""},
                {nota:"", atividade: ""},
                {nota:"", atividade: ""}
              ]
            }, 
            { disciplina: "Ciências", 
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
            }, 
            { disciplina: "Inglês", 
              notas: [
                {nota:"6", atividade: "3"}, 
                {nota:"4", atividade: "2"},
                {nota:"", atividade: ""},
                {nota:"", atividade: ""}
              ]
            }            
        ],
    }

    function handleOpenNotes(disciplina: string) {       
       userFake.disciplinas.filter((item) => item.disciplina === disciplina).map((nota) => {            
            setNote(nota.notas);
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
                <VStack w="full" mt={3} p={2} bg="gray.600">
                    <HStack w="full" alignItems="center" space={2}> 
                        <ListChecks color={colors.primary[700]} size={15}/>
                        <Heading color="gray.300" fontSize={12} textTransform="uppercase" >disciplinas</Heading>
                    </HStack>     
                    <HStack w="full" alignItems="flex-start" space={1} flexWrap="wrap"> 
                        {userFake.disciplinas.map((item) => (
                            <ButtonSecondary 
                                key={item.disciplina}
                                title={item.disciplina} 
                                state={pressed === item.disciplina ? true : false}
                                onPress={() => {
                                    handleOpenNotes(item.disciplina); 
                                    setPressed(item.disciplina);
                                }}
                            />                        
                        ))}                       
                    </HStack>                 
                </VStack>
                <HStack w="full" mt={3} p={5} bg="gray.600" space={2}> 
                    <CircleWavyCheck color={colors.primary[700]} size={15}/>
                    <Heading color="gray.300" fontSize={12} >HISTÓRICO DE NOTAS</Heading>
                </HStack>                                      
                <VStack w="full" mt={3} p={2} bg="gray.600">  
                { note.length > 0 ?
                    note.map((item, index) => { return (
                        <>
                            <Heading color="gray.300" fontSize={12} >{index + 1}ª Avaliação</Heading>
                            <HStack w="full" alignItems="center" space={2} justifyContent="space-between">                        
                                <Input 
                                    mb={4}
                                    placeholder="Atividade"                    
                                    w={100}    
                                    keyboardType="decimal-pad"
                                    value={item.atividade}
                                />
                                <Input 
                                    mb={4}
                                    placeholder="Nota"                    
                                    w={100}    
                                    keyboardType="decimal-pad"
                                    value={item.nota}
                                />
                                <Input 
                                    mb={4}
                                    placeholder="Total"                    
                                    w={100}  
                                    value={
                                        (parseFloat(item.atividade) + parseFloat(item.nota)).toString()
                                    }
                                />
                            </HStack>
                        </>
                    )
                    }
                ) : <Heading color="gray.300" fontSize={12}>Selecione uma disciplina para ver as notas!</Heading> }  
                </VStack>                  
                {
                    statusSelected === 'open' ?
                        <VStack w="full" alignItems="center" space={2} justifyContent="space-between">
                            <Button title="Salvar" w="100%" mt={4} mb={1}/>   
                            <Button title="Fechar" w="100%" mt={1} mb={4} bg={colors.green[900]}/>   
                        </VStack>
                    : null
                }
            </VStack>
        </ScrollView>
    </VStack>
   ) 
}