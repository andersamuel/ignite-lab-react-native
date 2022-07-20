import { Input as NativeBaseInput, IInputProps } from "native-base";

export const Input = ({ ...rest }: IInputProps) => {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={2}
      borderColor="transparent"
      fontSize="sm"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{
        borderColor: "green.700",
        bg: "gray.700",
      }}
      {...rest}
    />
  );
};
