import { Control, Controller } from "react-hook-form";
import { TextInput, Text } from "react-native";
import { LoginForm } from "../login";

type Props = {
  name: string;
  placeholder: string;
  control: Control<any>;
};

const Input = ({ name, placeholder, control }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <TextInput
            placeholderTextColor={"#000000"}
            className="w-full h-12 rounded-md border-2 font-bold bg-white border-zinc-50 p-2"
            onBlur={field.onBlur}
            value={field.value}
            onChangeText={field.onChange}
            placeholder={placeholder}
          />
          <Text className="text-red-500 text-xs mt-2">
            {fieldState.error?.message}
          </Text>
        </>
      )}
    ></Controller>
  );
};

export default Input;
