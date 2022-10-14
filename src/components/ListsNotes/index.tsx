import { 
  HStack, 
  Heading,   
} from 'native-base';

import { Input } from '../../components/Input';

export function ListsNotes() {

  return (
    <>    
        <Heading color="gray.300" fontSize={12} >Nota</Heading>
        <HStack w="full" alignItems="center" space={2} mt={1} ml={-2}> 
            <Input 
                mb={4}
                placeholder="Atividades"                    
                w={110}                   
            />
            <Input 
                mb={4}
                placeholder="Nota" 
                w={110}                   
            />
            <Input 
                mb={4}
                placeholder="Total"                    
                w={110}               
            />
        </HStack> 
    </>
  );
}