import {
  TextInput,
  PasswordInput,
  Checkbox,
  Container,
  Image,
  Group,
  Button,
  Card,
} from '@mantine/core';
import RifamaxLogo from '@assets/images/rifamax-logo.png';
import ThemeSwitcher from '@components/ThemeSwitcher';

type Props = {};

function Login({}: Props) {
  return (
    <Container>
      <Group mt='15vh' position='center'>
        <Card radius='lg' withBorder w={450}>
          <Image src={RifamaxLogo} alt='Rifamax' style={{ margin: '0 auto' }} />
          <TextInput
            label='Correo'
            radius='md'
            placeholder='micorreo@rifamax.com'
            required
            mb={20}
            withAsterisk={false}
          />
          <PasswordInput
            radius='md'
            label='Contraseña'
            placeholder='********'
            required
            mb={20}
            withAsterisk={false}
          />
          <Group mb={20} position='apart' mt='lg'>
            <Checkbox label='Recordarme' />
          </Group>
          <Group>
            <Button fullWidth radius='md'>
              Iniciar Sesion
            </Button>
            <ThemeSwitcher />
          </Group>
        </Card>
      </Group>
    </Container>
  );
}

export default Login;
