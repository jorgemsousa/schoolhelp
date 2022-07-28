import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      bg=
      { ...rest }
    >
      <Heading>
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}