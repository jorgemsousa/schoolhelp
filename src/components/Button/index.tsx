import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
  title: string
  bg?: string
}

export function Button({ title, bg, ...rest }: Props) {
  return (
    <ButtonNativeBase
      bg={bg ||"green.700"}
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: "green.500" }}
      { ...rest }
    >
      <Heading
        color="#FFF"
        fontSize="sm"
      >
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}