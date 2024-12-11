import {View, Text} from "react-native"
import {useFonts, Rubik_600SemiBold, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold} from "@expo-google-fonts/rubik"

export default function Index(){
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 22}}>Hello</Text>
        </View>
    )
}