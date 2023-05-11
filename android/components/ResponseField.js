import { Pressable, Text, TextInput, View, Alert } from "react-native";
import tw from "twrnc";
import Output from "./Output";

{ /*  multiline or number of lines*/ }



const ResponseField = ({ language, text }) => {

    return (


        <View style={tw`flex flex-col items-center`}>
            <TextInput
                editable={false}
                multiline={true}
                numberOfLines={4}
                textAlignVertical={"top"}
                placeholder={"translation:"}
                style={tw`border-4 w-full border-gray-100 focus:border-blue-400 rounded-md text-xl text-sky-600 p-8`}
                >

                <Output language={language} text={text}/>

            </TextInput>

            <Pressable
                style={tw`w-40 h-12 mt-6 rounded-3xl bg-sky-400 border-2 justify-center items-center border-t-sky-400 border-l-sky-400 border-b-sky-600 border-r-sky-600`}
                onPress={() =>
                    Alert.alert('Notice about copy', 'this function has not been implemented yet. Sorry.', [
                        { text: 'Cancel', style: 'cancel' },
                        { text: 'Confirm', onPress: () => console.log('Hello!') }
                    ])}>
                <View>
                    <Text style={tw`text-white font-semibold text-xl`}>Copy</Text>
                </View>
            </Pressable>
        </View>



    )
}

export default ResponseField