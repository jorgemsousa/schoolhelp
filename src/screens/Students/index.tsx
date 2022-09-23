import { 
    VStack, 
    HStack, 
    IconButton, 
    useTheme, 
    Text,
    ScrollView
} from "native-base";
import { useState } from "react";
import { Button } from "../../components/Button";
import { ButtonSecondary } from "../../components/ButtonSecondary";

import { Header } from '../../components/Header';
import { Input } from "../../components/Input";
import { PlusCircle } from 'phosphor-react-native'

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
                {resultSubject.map((item) => 
                    <ButtonSecondary title={item}  state={false} key={item} />
                )}

                <Button 
                    title="Cadastrar"
                    w="full"
                    mt={4}
                    onPress={clearStates}
                />
            </ScrollView>   
        </VStack>
    )
}