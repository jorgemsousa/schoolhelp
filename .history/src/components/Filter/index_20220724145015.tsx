import { Text, Button, IButtonProps, useTheme} from 'native-base';

type Props = IButtonProps & {
  title: string;
  isActive?: boolean;
  type: 'open' | 'closed';
}

export function Filter({ title, isActive = false, type, ...rest }: Props) {
  const { colors } = useTheme();

  const colorType = type === 'open' ? colors.secondary
  return (
    <Button
      variant="outline"
      borderWidth={isActive ? 1 : 0}

    >
      <Text></Text>
    </Button>
  );
}