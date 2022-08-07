import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps  {
  title: string
}

export function Button({ title }: Props) {
  return (
    <ButtonNativeBase>
      <Heading>
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}