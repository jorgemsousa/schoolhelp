import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
  title: string,
  state: Boolean
}

export function ButtonSecondary({ title, state, ...rest }: Props) {
  return (
    <ButtonNativeBase
      bg="gray.600"
      h={10}
      borderWidth={2}
      borderColor={state ? 'green.600' : 'purple.800'}
      fontSize="sm"
      rounded="sm"
      margin={2}
      _pressed={{ bg: "gray.600" }}
      { ...rest }
    >
      <Heading
        color={state ? 'green.600' : 'purple.800'}
        fontSize="sm"
      >
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}