import { VStack, HStack, Text, Box, useTheme} from 'native-base';

import { MaterialIcons }  from '@expo/vector-icons/'

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
  const { colors } = useTheme();

  const statusColor = data.status === 'open' ? colors.secondary[700] : colors.green[300]

  return (
    <HStack
      bg="gray.600"
      mb={4}
      alignItems="center"
      justifyContent="space-between"
      rounded="sm"
      overflow="hidden"
      mt={4}
    >
      <Box h="full" w={2} bg={statusColor} />
      <VStack flex={1} my={5} ml={5}>
        <Text color="white" fontSize="md">
          Aluno: {data.name}
        </Text>
        <HStack>
          <MaterialIcons name=''
        </HStack>
      </VStack>
    </HStack>
  );
}