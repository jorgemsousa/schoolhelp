import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = {
  title: string
}

export function Button({  }: Props) {
  return (
    <ButtonNativeBase>
      <Heading>Entrar</Heading>
    </ButtonNativeBase>
  );
}