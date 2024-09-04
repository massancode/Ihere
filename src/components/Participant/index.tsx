import {View,Text} from 'react-native'
import { styles } from './styles'
import { TouchableOpacity } from 'react-native'

type props = {
    name:string,
    remove: () =>  void;
}

export function Participant({name,remove}:props) {
   return(
      <View style={{flexDirection:'row'}}>

      <View style={styles.container}>
        <Text style={styles.name} >
           {name}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={remove}  >
        <Text style={styles.buttonText}>
           -
        </Text>
      </TouchableOpacity>
      </View>
   )
}