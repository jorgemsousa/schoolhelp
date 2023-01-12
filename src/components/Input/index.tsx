import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
}

export function Input({errorMessage = null, isInvalid, ...rest  }: Props) {

  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl mb={2} isInvalid={invalid}>
      <NativeBaseInput 
        bg="gray.700"
        h={12}
        size="md"
        borderWidth={0}
        fontSize="md"
        fontFamily="body"
        color="white"
        isInvalid={invalid}
        placeholderTextColor="gray.300"
        _focus={{
          borderWidth: 1,
          borderColor: "green.500",
          bg: "gray.700"
        }}
        { ...rest }
        _invalid={{
          borderWidth: 2,
          borderColor: 'red.500'
        }}
      />
      <FormControl.ErrorMessage>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}