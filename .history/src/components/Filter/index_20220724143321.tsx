import { Text, Button, IButtonProps, useTheme} from 'native-base';

type Props = IButtonProps & {
  title: string;
  isActive?: boolean;
  type: 'open' | 'closed';
}

export function Filter({ title, isActive}: Props) {
  return (
    <Button>

    </Button>
  );
}