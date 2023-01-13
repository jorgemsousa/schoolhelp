import { 
    VStack, 
    HStack, 
    IconButton, 
    useTheme, 
    ScrollView,
} from "native-base";
import { useState } from "react";

import { Button } from "../../components/Button";
import { ButtonSecondary } from "../../components/ButtonSecondary";
import { Header } from '../../components/Header';
import { Input } from "../../components/Input";
import { Plus } from 'phosphor-react-native'
import { Alert } from "react-native";

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
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [school, setSchool] = useState('');
    const [series, setSeries] = useState('');
    const [grades, setGrades] = useState('');
    const [media, setMedia] = useState('');
    const [subject, setSubject] = useState('');
    const [resultSubject, setResultSubject] = useState([]);

    const { colors } = useTheme();

   
    function clearStates(){
        setName('')
        setYear('')
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
                    atividade: 0,
                    nota: 0
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

    function saveStudent(){     
        if(name != '' && year != '' && school != '' && series != '' && grades != '' && media != '' && subjects.length > 0){
            const student = {
                name: name,
                year: year,
                school: school,
                series: series,
                grades: grades,
                media: media,
                subjects: subjects(parseInt(grades)),
            }        
            console.log(student);
            clearStates();
        }else{
            Alert.alert("Todos os campos são obrigatórios")
        }
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
                    placeholder="Ano Letivo"
                    w="full"
                    mt={5}
                    keyboardType="decimal-pad"
                    value={year}
                    onChangeText={ setYear }
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
                    onPress={saveStudent}
                />
            </ScrollView>   
        </VStack>
    )
}