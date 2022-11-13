import { useState } from 'react';
import {HStack, IButtonProps} from 'native-base';
import { ButtonSecondary } from '../ButtonSecondary'
type Props = IButtonProps & {
  title: string;
  isActive?: boolean;
}

export function FilterDisciplines({ title, isActive, ...rest }: Props) {
  const [press, setpress] = useState(false);

  return (
      <ButtonSecondary 
        state={press} 
        title={title} 
        onPress={() => setpress(!press)}
        {...rest}
      />    
  );
}