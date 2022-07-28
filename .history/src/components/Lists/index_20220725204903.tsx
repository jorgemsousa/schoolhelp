import { HStack, Text } from 'native-base';

export type ListProps = {
  id: string;
  name: string;
  when: string;
  status: 'open' | 'closed';
  school: string;
  series: string;
  notas: number;
  medi
}

type Props = {
  data: ListProps;
}

export function Index() {
  return (
    <HStack>
      <Text></Text>
    </HStack>
  );
}