import { TextInput, View } from "react-native";
import tw from "twrnc";

{ /*  multiline or number of lines*/ }



const InputField = ({setOutput}) => {




    const translate = (text) => {
        setOutput(text)
        console.log(text)
    }


    return ( 
        <View style={tw``}>
            <TextInput 
            editablesdf
            multiline={true} 
            numberOfLines={4} 
            textAlignVertical={"top"}
            placeholder={"Enter your text"}
            onChangeText={(textInput)=>translate(textInput)}
            style={tw`border-4 border-gray-100 focus:border-blue-400 rounded-md text-xl p-8`}>
            
                
            </TextInput>

        </View>
        
        
        
    )
}

export default InputField