import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = {
  title: string
}

export function Button({ titl }: Props) {
  return (
    <ButtonNativeBase>
      <Heading>Entrar</Heading>
    </ButtonNativeBase>
  );
}