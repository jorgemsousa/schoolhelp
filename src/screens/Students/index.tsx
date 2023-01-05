import { 
    VStack, 
    HStack, 
    IconButton, 
    useTheme, 
    ScrollView
} from "native-base";
import { useState } from "react";
import { Button } from "../../components/Button";
import { ButtonSecondary } from "../../components/ButtonSecondary";

import { Header } from '../../components/Header';
import { Input } from "../../components/Input";
import { PlusCircle } from 'phosphor-react-native'
import { Alert } from "react-native";

export function Students() {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [school, setSchool] = useState('');
    const [series, setSeries] = useState('');
    const [grades, setGrades] = useState('');
    const [media, setMedia] = useState('');
    const [subject, setSubject] = useState('');
    const [resultSubject, setResultSubject] = useState([])

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

    const student = {
        name: name,
        year: year,
        school: school,
        series: series,
        grades: grades,
        media: media,
        subjects: [
            {
                name: subject,
                notas: {
                    nota: 0,
                    activity: 0
                }
            }
        ]
    }

    function notesOfSubject(notes: number){
        let notas = [];
        for(let i = 1; i <= notes; i++){
           notas[i] = {
             nota: 0,
             activity: 0
           }
        }
        return notas;
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
                    onChangeText={setName}
                />
                <Input 
                    placeholder="Ano Letivo"
                    w="full"
                    mt={5}
                    value={year}
                    onChangeText={setYear}
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
                    value={grades}
                    keyboardType="decimal-pad"
                    onChangeText={setGrades}
                />
                <Input 
                    placeholder="Média de Aprovação"
                    w="full"
                    mt={5}
                    value={media}
                    keyboardType="decimal-pad"
                    onChangeText={setMedia}
                />
                <HStack   alignItems="center" maxWidth='90%'>
                    <Input 
                        placeholder="Disciplinas"
                        w="full"
                        mt={5}
                        value={subject}
                        onChangeText={setSubject}
                    />
                    <IconButton 
                        icon={
                            <PlusCircle 
                                size={26} 
                                color={colors.gray[300]} 
                            />
                        }
                        mt={5}
                        onPress={() => {
                            setResultSubject([...resultSubject, subject.toUpperCase()]);
                            setSubject('');
                        }}
                    />
                    
                </HStack>
                <HStack w="full" alignItems="flex-start" space={1} flexWrap="wrap" > 
                    {resultSubject.map((item) => 
                        <ButtonSecondary title={item}  state={false} key={item}/>
                    )}
                </HStack>

                <Button 
                    title="Cadastrar"
                    w="full"
                    mt={4}
                    onPress={() => {
                        clearStates();
                        Alert.alert(JSON.stringify(notesOfSubject(4)))
                    }}
                />
            </ScrollView>   
        </VStack>
    )
}