import { HStack, Text } from 'native-base';

export type ListProps = {
  id: string;
  name: string;
  when: string;
  status: 'open' | 'closed';
  school: string;
  series: string;
  notas: number;
  media: number;
  disciplinas: string[];
}

type Props = {
  data: ListProps;
}

export function Lists({data, ...rest}: Props) {

  const colorType = type === 'open' ? colors.secondary[700] : colors.green[300]

  return (
    <HStack
      bg="gray.600"
      mb={4}
      alignItems="center"
      justifyContent="space-between"
      rounded="sm"
      overflow="hidden"
    >
      <Text color="white" fontSize="md">
        Aluno: {data.name}
      </Text>
    </HStack>
  );
}