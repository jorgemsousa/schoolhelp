import { VStack, HStack, Text, Box, useTheme, Circle} from 'native-base';

import { MaterialIcons }  from '@expo/vector-icons/'
import { color } from 'native-base/lib/typescript/theme/styled-system';

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
        <HStack alignItems="center" flex={1}>
          <MaterialIcons name='access-time' color={colors.gray[300]}/>
          <Text color="gray.200" fontSize="xs" ml={1}>
              {data.when}
          </Text>
        </HStack>
      </VStack>
      <Circle bg="gray.500" h={12} w={12} mr={5}>
        {
          data.status === 'closed' ? 
            <MaterialIcons name="check-circle-outline" color={statusColor} /> : 
            <MaterialIcons name="hourglass-bottom" color=/>
        }
      </Circle>
    </HStack>
  );
}