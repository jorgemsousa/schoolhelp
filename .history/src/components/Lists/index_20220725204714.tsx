import { HStack, Text } from 'native-base';

export type ListProps = {
  id: string;
  name: string;
  when: string;
  status: 'open' | 'closed';
}

type Props = {
  data
}

export function Index() {
  return (
    <HStack>
      <Text></Text>
    </HStack>
  );
}