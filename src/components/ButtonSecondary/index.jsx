import { Button as ButtonNativeBase, Heading } from 'native-base';

export function ButtonSecondary({ title, state, ...rest }) {
  return (
    <ButtonNativeBase
      bg="gray.600"
      h={10}
      borderWidth={2}
      borderColor={state ? 'green.300' : 'purple.700'}
      fontSize="sm"
      rounded="sm"
      minWidth={100}
      mt={2}
      _pressed={{ bg: "gray.600" }}
      { ...rest }
    >
      <Heading
        color={'gray.300'}
        fontSize="sm"
      >
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}

