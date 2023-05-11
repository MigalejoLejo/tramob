import axios from "axios";
import { useEffect, useState } from "react";
import { Text } from "react-native";


function Output ({language, text}) {
    const [translated] = useTranslation(language, text)
    
    return (
            <Text>
               {translated}
            </Text>
    )
}


const debounce = (fn) => {
    let id = null;
  
    return (...args) => {
      if (id) {
        clearTimeout(id);
      }
      id = setTimeout(() => {
        fn(...args);
        id = null;
      }, 300);
    };
  };

const useTranslation = (language, text) => {
    const [translated, setTranslate] = useState("")

    useEffect (() => {
        if (!text){
            return
        }

        const cancelToken = axios.CancelToken.source
        doTranslation(text, language, cancelToken, setTranslate)
      }, [language, text] )

    return [translated]
    
}

const doTranslation = debounce(
    async (input, languageCode, cancelToken, callback) => {
        try {
            const { data } = await axios.post(
                "https://translation.googleapis.com/language/translate/v2?key=AIzaSyDNltKX8oKTEQWRYGUtc4zzFWfNjFV2DvI",                {
                    q: input,
                    target: languageCode
                },
                {
                    cancelToken: cancelToken.token
                }
            )
            callback (data.data.translations[0].translatedText)

        } catch (err) {
            console.log("ERROR: ", err)
        }
    }

) 



export default Output