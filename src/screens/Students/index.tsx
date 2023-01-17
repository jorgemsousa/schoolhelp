import { 
    VStack, 
    HStack, 
    IconButton, 
    useTheme, 
    ScrollView,
} from "native-base";
import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";

import { Button } from "../../components/Button";
import { ButtonSecondary } from "../../components/ButtonSecondary";
import { Header } from '../../components/Header';
import { Input } from "../../components/Input";
import { Plus } from 'phosphor-react-native'


type FormProps = {
    name: string,
    year: number,
    school: string,
    series: string,
    grades: number,
    media: number,
    subject: Array<string>
}

export function Students() {
    const navigation = useNavigation(); 

    const [name, setName] = useState('');
    const [school, setSchool] = useState('');
    const [series, setSeries] = useState('');
    const [grades, setGrades] = useState('');
    const [media, setMedia] = useState('');
    const [subject, setSubject] = useState('');
    const [resultSubject, setResultSubject] = useState([]);

    const [isLoading, setIsLoading] = useState(false);


    const { colors } = useTheme();

   
    function clearStates(){
        setName('')
        setSchool('')
        setSeries('')
        setGrades('')
        setMedia('')
        setSubject('')
        setResultSubject([])
    }

    function notesOfSubject(notes: number){
        let notas = [];
        for(let i = 1; i <= notes; i++){
            notas.push(
                {
                    atividade: "0",
                    nota: "0"
                }
            ) 
        }
        return notas;
    }

    function subjects(notes: number){
        const notas = notesOfSubject(notes)
        const subjectsNotes = {
            disciplines: resultSubject.map((item) => ({
                name: item,
                notas: notas
            }))
        }
        return subjectsNotes.disciplines;
    }

    function handleNewStudent(){     
        if(!name && !school && !series && !grades && !media && subjects.length > 0){
            return Alert.alert("Aviso", "Todos os campos são obrigatórios")
        }

        setIsLoading(true);     

        firestore()
        .collection("students")
        .add({
            name,
            school,
            series,
            grades,
            media,
            subjects: subjects(parseInt(grades)),
            status: 'open',
            created_at: firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            Alert.alert("Aluno", "Aluno cadastrado com sucesso!");
            navigation.goBack();
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false);
            clearStates();
            return Alert.alert("Erro", "Cadastro não efetuado")
        })


    }

    return(
        <VStack flex={1} p={4} bg="gray.600">
            <ScrollView>
                <Header title="Novo Aluno" />
                
                <Input 
                    placeholder="Nome do aluno"
                    w="full"
                    mt={5}
                    value={name}
                    onChangeText={ setName }
                />                             
                         
                <Input 
                    placeholder="Escola"
                    w="full"
                    mt={5}
                    value={school}
                    onChangeText={setSchool}
                />                   

                <Input 
                    placeholder="Série / Turma"
                    w="full"
                    mt={5}
                    value={series}
                    onChangeText={setSeries}
                />                
               
                <Input 
                    placeholder="Quantidade de Notas"
                    w="full"
                    mt={5}
                    keyboardType="decimal-pad"
                    value={grades}
                    onChangeText={setGrades}
                />                   

                <Input 
                    placeholder="Média de Aprovação"
                    w="full"
                    mt={5}
                    keyboardType="decimal-pad"
                    value={media}
                    onChangeText={setMedia}
                />                
                    
                <Input 
                    placeholder="Disciplinas"
                    w="full"
                    mt={5}
                    value={subject}
                    onChangeText={setSubject}
                    InputRightElement={
                        <IconButton 
                            icon={
                                <Plus 
                                    size={16} 
                                    color={colors.gray[300]} 
                                    weight="bold"
                                />
                            }
                            onPress={() => {
                                subject != '' ? (
                                    setResultSubject([...resultSubject, subject.toUpperCase()]),
                                    setSubject('')
                                )
                                : false
                            }}
                        />
                    }
                />                     
                                        
                <HStack w="full" alignItems="flex-start" space={1} flexWrap="wrap" > 
                    {resultSubject.map((item) => 
                        <ButtonSecondary title={item}  state={false} key={item}/>
                    )}
                </HStack>

                <Button 
                    title="Cadastrar"
                    w="full"
                    mt={4}
                    isLoading={isLoading}    
                    onPress={handleNewStudent}
                />
            </ScrollView>   
        </VStack>
    )
}