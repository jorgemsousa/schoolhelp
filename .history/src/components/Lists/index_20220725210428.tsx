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
  return (
    <HStack
      bg="gray.600"
      mb
    >
      <Text color="white" fontSize="md">
        Aluno: {data.name}
      </Text>
    </HStack>
  );
}