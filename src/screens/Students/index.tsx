import { VStack } from "native-base";
import { Button } from "../../components/Button";

import { Header } from '../../components/Header';
import { Input } from "../../components/Input";

export function Students() {
    return(
        <VStack flex={1} p={6} bg="gray.600">
            <Header title="Novo Aluno" />
            <Input 
                placeholder="Nome do aluno"
                w="full"
                mt={5}
            />
            <Input 
                placeholder="Ano Letivo"
                w="full"
                mt={5}
            />
            <Input 
                placeholder="Escola"
                w="full"
                mt={5}
            />
            <Input 
                placeholder="Série / Turma"
                w="full"
                mt={5}
            />
            <Input 
                placeholder="Quantidade de Notas"
                w="full"
                mt={5}
            />
            <Input 
                placeholder="Média de Aprovação"
                w="full"
                mt={5}
            />
            <Input 
                placeholder="Disciplinas                                                         +"
                w="full"
                mt={5}
            />
            <Button 
                title="Cadastrar"
                w="full"
                mt={8}
            />
        </VStack>
    )
}