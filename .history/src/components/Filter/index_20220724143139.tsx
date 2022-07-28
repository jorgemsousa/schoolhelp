import { Text, Button, IButtonProps, useTheme} from 'native-base';

type Props = IButtonProps & {
  title: string,
  isActive?: boolean,
  type: 'open'
}

export function Index() {
  return (
    <Button>

    </Button>
  );
}