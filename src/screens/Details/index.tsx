import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { 
    Heading, 
    HStack, 
    VStack, 
    useTheme, 
    ScrollView,
} from "native-base";
import firestore from '@react-native-firebase/firestore';

import { 
    Hourglass, 
    CircleWavyCheck, 
    User,
    ListChecks
} from 'phosphor-react-native';

import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { ButtonSecondary } from "../../components/ButtonSecondary";
import { Input } from '../../components/Input';
import { dateFormat } from "../../utils/ferestoreDateFormat";
import { ListProps } from "../../components/Lists";
import { StudentDTO } from "../../DTOs/StudentDTO";
import { Loading } from "../../components/Loading";

type RouteParams = {
    id: string,
}

type StudentDetails = ListProps & {
    name: string,
    subjects: string[];
    status: string;
}

export function Details() {
    const { colors } = useTheme();
    const route = useRoute();

    const { id } = route.params as RouteParams;
    
    const [isLoading, setIsLoading] = useState(true)
    const [pressed, setPressed] = useState('');
    const [student, setStudent] = useState<StudentDetails>({} as StudentDetails);
    const [note, setNote] = useState([]);
   
    function handleOpenNotes(disciplina: string) {       
       student.subjects.filter((item) => item.name === disciplina).map((nota) => {  
            setNote(nota.notas);
       })
    }

    useEffect(() => {
        
        firestore()
        .collection<StudentDTO>('students')
        .doc(id)
        .get()
        .then((doc) =>{
            const { created_at, name, status, subjects, closed_at } = doc.data()

            const closed = closed_at ? dateFormat(closed_at) : null

            setStudent({
                id: doc.id,
                name,
                status,
                subjects,
                when: dateFormat(created_at),
                closed
            })
           
            setIsLoading(false);
        })
    }, [])

    return(
    <VStack flex={1} bg="gray.700" >
        <Header title="Acompanhamento" />
        {
            isLoading ? <Loading /> :
            <>            
                <HStack w="full" bg="gray.500" p={3} justifyContent="center" alignItems="center" space={2}>
                    { student.status === 'open' ? 
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
                            <Heading color="gray.100" fontSize={14} mt={1}>{student.name.toUpperCase()}</Heading>
                        </VStack>
                        <VStack w="full" mt={3} p={2} bg="gray.600">
                            <HStack w="full" alignItems="center" space={2}> 
                                <ListChecks color={colors.primary[700]} size={15}/>
                                <Heading color="gray.300" fontSize={12} textTransform="uppercase" >disciplinas</Heading>
                            </HStack>     
                            <HStack w="full" alignItems="flex-start" space={1} flexWrap="wrap"> 
                                {student.subjects.map((item) => (
                                    <ButtonSecondary 
                                        key={item.name}
                                        title={item.name} 
                                        state={pressed === item.name ? true : false}
                                        onPress={() => {
                                            handleOpenNotes(item.name); 
                                            setPressed(item.name);
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
                                            placeholder="Atividades"                    
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
                            student.status === 'open' ?
                                <VStack w="full" alignItems="center" space={2} justifyContent="space-between">
                                    <Button title="Salvar" w="100%" mt={4} mb={1}/>   
                                    <Button title="Fechar" w="100%" mt={2} mb={4} bg={colors.green[900]}/>   
                                </VStack>
                            : null
                        }
                    </VStack>
                </ScrollView>
            </>
        }
    </VStack>
   ) 
}