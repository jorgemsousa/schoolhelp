import { useState } from 'react';
import {IButtonProps} from 'native-base';
import { ButtonSecondary } from '../ButtonSecondary'
type Props = IButtonProps & {
  title: string;
  isActive?: boolean;
}

export function FilterDisciplines({ title, isActive, ...rest }: Props) {
  const [press, setpress] = useState(isActive);

  return (
    <ButtonSecondary 
      state={press} 
      title={title} 
      onPress={() => setpress(!press)}
    />     
  );
}