import { Text, View, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-4 ">
      <Image
        source={require("../assets/images/fundo.png")}
        className="w-full h-full absolute top-0 left-0"
      />
      <Image source={require("../assets/images/logo.png")} className="" />
      <Link href={"/login"} asChild>
        <TouchableOpacity className="items-center justify-center bg-zinc-50 rounded-md h-40 w-40">
          <Image
            source={require("../assets/images/professor.png")}
            className=""
          />
          <Text className="text-slate-600  font-bold">Sou Professor</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/login"} asChild>
        <TouchableOpacity className="items-center justify-center bg-zinc-50 rounded-md h-40 w-40">
          <Image
            source={require("../assets/images/responsavel.png")}
            className=""
          />
          <Text className="text-slate-600  font-bold">Sou Responsável</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

export default Index;
