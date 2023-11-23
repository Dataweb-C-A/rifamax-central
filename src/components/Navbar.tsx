import {
  ScrollArea,
  Flex,
  Image,
  Modal,
  Button,
  Group,
  Card,
  Title,
  Divider,
  Drawer
} from '@mantine/core';
import RifamaxLogo from '@assets/images/rifamax-logo.png';
import ThemeSwitcher from '@components/ThemeSwitcher';
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa"
import { IconUserFilled, IconUserSquare, IconArrowBigRightFilled ,IconUsersGroup } from '@tabler/icons-react';
import { BsBuilding, BsJoystick } from "react-icons/bs";
import { BiMoney } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { useDisclosure } from '@mantine/hooks';

interface INavbar {
  module?: "rifamax" | "x100" | "50/50"
}

function Navbar({ module }: INavbar) {
  const [drawerOpened, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);
  const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);


  return (
    <>
      <Drawer size={350} withCloseButton={false} opened={drawerOpened} onClose={closeDrawer} >

        <Image maw={240} mx="auto" src={RifamaxLogo} alt='Rifamax' />

        <Divider my="sm" variant="dotted" />
        <ScrollArea mt={75} h="40vh">

          <Flex
            mih={50}
            gap="xl"
            justify="flex-start"
            align="center"
            direction="column"
            wrap="wrap"
          >

            <Group>

              <FaHome size={20} />
              Lobby
            </Group>

            <Group>

              <BsBuilding size={20} />
              Reportes
            </Group>
            <Group>

              <BsJoystick size={20} />
              Juegos
            </Group>
            <Group>

              <BiMoney size={20} />
              Monedas
            </Group>
            <Group>
              <MdAttachMoney size={20} />
              Cuadre
            </Group>


          </Flex>
        </ScrollArea>
        <Divider my="sm" variant="dotted" />
        <Group position='apart'>

        <FaUsers size={20}/>
          <IconUserFilled size={20}/>
          <ThemeSwitcher />
        </Group>
      </Drawer>

      <Modal
        opened={modalOpened}
        onClose={closeModal}
        withCloseButton={false}
        centered
        radius="lg"
      >
        <Group position='center'>

          <IconUserSquare size={400} />

        </Group>
        <Group position='center'>



          <Title order={5}>Javier Diaz</Title>
        </Group>
        <Group position='center'>



          <Title c="#909296" order={5}>javierdiazt406@gmail.com</Title>
        </Group>
        <Button mt={15} fullWidth color="red" radius="md">
          Cerrar sesion
        </Button>
      </Modal>
      <Card shadow="xl" withBorder w="8.5vh" style={{ height: "100vh" }} radius="xs"  >


        <Image src={RifamaxLogo} alt='Rifamax' />
        <Divider my="sm" variant="dotted" />

        <ScrollArea mt={75} h="70vh">

          <Flex
            mih={50}
            gap="xl"
            justify="flex-start"
            align="center"
            direction="column"
            wrap="wrap"
          >

            <FaHome size={20} />
            <BsBuilding size={20} />
            <BsJoystick size={20} />
            <BiMoney size={20} />
            <MdAttachMoney size={20} />
          </Flex>
        </ScrollArea>
        <Divider my="sm" variant="dotted" />

        <Flex
          mih={50}
          gap="xl"
          justify="flex-start"
          align="center"
          direction="column"
          wrap="wrap"
        >


          <ThemeSwitcher />

          <IconUserFilled
            style={{ cursor: 'pointer' }}
            onClick={openModal}
            size={20}
          />
          <IconArrowBigRightFilled onClick={openDrawer} size={20} />
        </Flex>

      </Card>
    </>
  )
}

export default Navbar