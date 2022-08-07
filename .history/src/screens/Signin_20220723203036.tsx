import { VStack, Heading, Icon } from "native-base";

import Logo from '../assets/logo_primary_.svg';
import Image from '../assets/image.svg';
import { Input } from "../components/Input";

export function SignIn(){
  return(
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24} >
      <Logo />
      <Image />
      <Heading color="gray.100" fontSize="xl" mt={6} mb={6}>
        Acesse sua Conta
      </Heading>

      <Input 
        placeholder="E-mail"
        mb={4}
        InputLeftElement={<Icon as={<Envelope } }
      />
      <Input placeholder="Senha"/>
    </VStack>    
  );
}