import {
  Pressable,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { z } from "zod";
import { loginSchema } from "@/schemas/loginSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./components/Input";
import { BACKEND_URL } from "@/contants";
import axios from "axios";
export type LoginForm = z.infer<typeof loginSchema>;
export default function Login() {
  const router = useRouter();
  const { control, handleSubmit } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    const loginURL = `${BACKEND_URL}/login`;
    const response = await axios.post(loginURL, data);
    if (response.status === 200) {
      router.push("/home");
    }
  };
  return (
    <View className="flex-1 items-center justify-center gap-4 ">
      <Link href={"/"} asChild>
        <Text className="text-slate-600  font-bold">Sou Professor</Text>
      </Link>
      <Image source={require("../assets/images/logo.png")} className="" />

      <View className="flex items-center justify-center w-3/4 gap-4 ">
        <Input name="email" placeholder="Email" control={control} />
        <Input name="password" placeholder="Senha" control={control} />
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          className="items-center justify-center bg-green-600 rounded-md h-8 w-full"
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <Link href={"/cadastro"} asChild>
          <Text className="text-slate-600  font-bold justify-self-stretch">
            Cadastro
          </Text>
        </Link>
      </View>
    </View>
  );
}
