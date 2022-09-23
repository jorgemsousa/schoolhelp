import { useRoute } from "@react-navigation/native";
import { Heading, HStack, VStack, useTheme } from "native-base";

import { ClockAfternoon, Hourglass, CircleWavyCheck } from 'phosphor-react-native';

import { Header } from "../../components/Header";
import { Button } from '../../components/Button'


type RouteParams = {
    id: string,
}

export function Details() {
    const { colors } = useTheme();
    const route = useRoute();

    const { id } = route.params as RouteParams;

   return(
    <VStack flex={1} bg="gray.700">
        <Header title="Acompanhamento" />
        <HStack w="full" bg="gray.500" p={3} justifyContent="center" alignItems="center" space={2}>
            <Hourglass color={colors.secondary[700]}/>
            <Heading color={colors.secondary[700]} fontSize={14} >
                EM ANDAMENTO
            </Heading>
        </HStack>
        <VStack paddingX={2}>
            <HStack w="full" mt={3} p={5} bg="gray.600" justifyContent="center"> 
                <Heading color="amber.200">TESTE</Heading>
            </HStack>
            <HStack w="full" mt={3} p={20} bg="gray.600" justifyContent="center"> 
                <Heading color="amber.200">TESTE</Heading>
            </HStack>
            <HStack w="full" mt={3} p={20} bg="gray.600" justifyContent="center"> 
                <Heading color="amber.200">TESTE</Heading>
            </HStack>
            <Button title="Fechar" mt={12}/>   
        </VStack>
    </VStack>
   ) 
}