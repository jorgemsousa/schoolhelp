import { 
  HStack, 
  Heading,  
  IPressableProps 
} from 'native-base';
import { useState } from 'react';

import { Input } from '../../components/Input';

export type ListProps = {
    nota: string;
    atividade: string;
  }[];



type Props = IPressableProps & {
  data: ListProps;
}

export function ListsNotes({data, ...rest}: Props) {
  const [activity, setActivity] = useState('');
  const [note, setNote] = useState(data);
  return (
    <>    
        <Heading color="gray.300" fontSize={12} >Nota</Heading>
        <HStack w="full" alignItems="center" space={2} ml={-2} justifyContent="space-between">                        
            <Input 
                mb={4}
                placeholder="Atividade"                    
                w={100}    
                keyboardType="decimal-pad"
            />
            <Input 
                mb={4}
                placeholder="Nota"                    
                w={100}    
                keyboardType="decimal-pad"
            />
            <Input 
                mb={4}
                placeholder="Total"                    
                w={100}  
            />
        </HStack>
    </>
  );
}