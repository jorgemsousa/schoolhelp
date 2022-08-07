import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = {
  title
}

export function Button() {
  return (
    <ButtonNativeBase>
      <Heading>Entrar</Heading>
    </ButtonNativeBase>
  );
}