import { 
  HStack, 
  Heading,   
} from 'native-base';
import { useState } from 'react';

import { Input } from '../../components/Input';

export function ListsNotes() {
  const [activity, setActivity] = useState('');
  const [note, setNote] = useState('');

  return (
    <>    
        <Heading color="gray.300" fontSize={12} >Nota</Heading>
        <HStack w="full" alignItems="center" space={2} mt={1} ml={-2}> 
            <Input 
                mb={4}
                placeholder="Atividades"                    
                w={110}    
                keyboardType="decimal-pad"
                onChangeText={setActivity}                             
            />
            <Input 
                mb={4}
                placeholder="Nota" 
                w={110}   
                keyboardType="decimal-pad"
                onChangeText={setNote}                
            />
            <Input 
                mb={4}
                placeholder="Total"                    
                w={110}  
                value={!activity || !note ? 'total' : (parseFloat(note) + parseFloat(activity)).toString() }           
            />
        </HStack> 
    </>
  );
}