import {
  Pressable,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./components/Input";
import { registerSchema } from "@/schemas/registerSchemas";
export type RegisterForm = z.infer<typeof registerSchema>;
export default function Login() {
  const { control, handleSubmit } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterForm) => {
    console.log(data);
  };
  return (
    <View className="flex-1 items-center justify-center gap-4 ">
      <Link href={"/"} asChild>
        <Text className="text-slate-600  font-bold">Cadastro</Text>
      </Link>
      <Image source={require("../assets/images/logo.png")} className="" />

      <View className="flex items-center justify-center w-3/4 gap-4 ">
        <Input name="name" placeholder="Nome" control={control} />
        <Input name="email" placeholder="Email" control={control} />
        <Input name="password" placeholder="Senha" control={control} />
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="items-center justify-center bg-green-600 rounded-md h-8 w-full"
        >
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
