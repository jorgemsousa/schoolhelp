import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { 
    Heading, 
    HStack, 
    VStack, 
    useTheme, 
    ScrollView 
} from "native-base";

import { 
    Hourglass, 
    CircleWavyCheck, 
    User,
    ListChecks
} from 'phosphor-react-native';

import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { ButtonSecondary } from '../../components/ButtonSecondary';
import { ListsNotes } from '../../components/ListsNotes';
import { Input } from "../../components/Input";


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
            { disciplina: "Portugues", notas: [
                {nota1:"nota1", atividade1: "atividade1"}, 
                {nota1:"nota1", atividade1: "atividade1"},
                {nota1:"nota1", atividade1: "atividade1"},
                {nota1:"nota1", atividade1: "atividade1"}
            ]}, 
            { disciplina: "Matematica", notas: [
                {nota1:"6", atividade1: "3"}, 
                {nota1:"nota1", atividade1: "atividade1"},
                {nota1:"nota1", atividade1: "atividade1"},
                {nota1:"nota1", atividade1: "atividade1"}
            ]}
            
        ],
    }
    
    const listNotes = () => {       
        for (let i = 1; i <= userFake.notas; i++) {
           return <ListsNotes />
        }
    }

    return(
    <VStack flex={1} bg="gray.700" >
        <Header title="Acompanhamento" />
        <HStack w="full" bg="gray.500" p={3} justifyContent="center" alignItems="center" space={2}>
            { statusSelected === 'open' ? 
            <>
                <Hourglass color={colors.secondary[700]}/> 
                <Heading color={colors.secondary[700]} fontSize={14} >
                    EM ANDAMENTO
                </Heading> 
            </> : 
            <>
                <CircleWavyCheck color={colors.green[500]}/>    
                <Heading color={colors.green[500]} fontSize={14} >
                    ENCERRADO
                </Heading>
            </>
            }            
        </HStack>
        <ScrollView >
            <VStack paddingX={3}>
                <VStack w="full" mt={3} p={5} bg="gray.600">
                    <HStack w="full" alignItems="center" space={2}> 
                        <User color={colors.primary[700]} size={15}/>
                        <Heading color="gray.300" fontSize={12} >ALUNO</Heading>
                    </HStack>
                    <Heading color="gray.100" fontSize={14} mt={1}>{userFake.name.toUpperCase()}</Heading>
                </VStack>
                <VStack w="full" mt={3} p={5} bg="gray.600">
                    <HStack w="full" alignItems="center" space={2}> 
                        <ListChecks color={colors.primary[700]} size={15}/>
                        <Heading color="gray.300" fontSize={12} >DISCIPLINAS</Heading>
                    </HStack>
                    {userFake.disciplinas.map((item) => 
                        <ButtonSecondary title={item.disciplina.toUpperCase()}  state={false} key={item.disciplina} />
                    )}
                    
                </VStack>
                <HStack w="full" mt={3} p={5} bg="gray.600" space={2}> 
                        <CircleWavyCheck color={colors.primary[700]} size={15}/>
                        <Heading color="gray.300" fontSize={12} >HISTÓRICO DE NOTAS</Heading>
                </HStack>
                <VStack w="full" mt={3} p={5} bg="gray.600">                      
                    {userFake.disciplinas.map((item) => 
                        item.notas.map((nota) => (
                            <>   
                                <HStack w="full" alignItems="center" space={2} mt={1} ml={-2}>                        
                                    <Input 
                                        mb={4}
                                        placeholder="Atividade"                    
                                        w={110}    
                                        keyboardType="decimal-pad"
                                        value={nota.atividade1} 
                                    />
                                    <Input 
                                        mb={4}
                                        placeholder="Nota"                    
                                        w={110}    
                                        keyboardType="decimal-pad"
                                        value={nota.nota1} 
                                    />
                                    <Input 
                                        mb={4}
                                        placeholder="Total"                    
                                        w={110}  
                                        value={(parseFloat(nota.nota1) + parseFloat(nota.atividade1)).toString() }           
                                    />
                                </HStack>
                            </>
                        ))
                    )}             
                </VStack>
                <HStack w="full" alignItems="center" space={2} justifyContent="space-between">
                    <Button title="Salvar" w="55%" mt={4} mb={4}/>   
                    <Button title="Fechar" w="40%" mt={4} mb={4} bg={colors.green[900]}/>   
                </HStack>
            </VStack>
        </ScrollView>
    </VStack>
   ) 
}