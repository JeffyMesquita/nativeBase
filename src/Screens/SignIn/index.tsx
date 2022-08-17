import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Center,
  Heading,
  Input,
  HStack,
  VStack,
  FormControl,
  Icon,
  Button,
  Checkbox,
  Text,
  Image,
  Slider,
  Switch,
  useColorMode,
} from "native-base";

export function SignIn() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center
      flex={1}
      _dark={{
        bg: "#333333",
      }}
      _light={{
        bg: "#ffffff",
      }}
    >
      <Image
        size={150}
        source={{ uri: "https://github.com/jeffymesquita.png" }}
        alt="Jeffy"
        borderRadius="full"
        resizeMode="contain"
        borderWidth={3}
        borderColor="gray"
      />

      <VStack w="full" p={5}>
        <Box w="full">
          <Heading
            color="coolGray.700"
            _dark={{
              color: "white",
            }}
          >
            Entrar
          </Heading>
          <FormControl isInvalid isRequired>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="seu@email.com"
              mt={3}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml={2}
                  color="muted.400"
                />
              }
            />
            <FormControl.ErrorMessage
              leftIcon={<Icon as={<MaterialIcons name="error" />} />}
            >
              E-mail inválido.
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              placeholder="sua senha"
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="lock" />}
                  size={5}
                  ml={2}
                  color="muted.400"
                />
              }
            />
          </FormControl>
          <Button mt={7} onPress={() => {}} colorScheme="purple">
            Entrar
          </Button>
        </Box>

        <HStack mt={5} space={3}>
          <Checkbox value="agree" />
          <Text>Concordo com a política de privacidade.</Text>
        </HStack>

        <Box alignItems="center" w="100%">
          <Slider
            w="3/4"
            maxWidth={300}
            defaultValue={70}
            minValue={0}
            maxValue={100}
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Box>

        <HStack alignItems="center" justifyContent="center" space={4}>
          <Text>Dark</Text>
          <Switch
            isChecked={colorMode === "light"}
            onToggle={toggleColorMode}
            aria-label={
              colorMode === "light"
                ? "Troque para o tema escuro"
                : "Troque para o tema claro"
            }
          />
          <Text>Light</Text>
        </HStack>
      </VStack>
    </Center>
  );
}
