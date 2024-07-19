import { Text,View,StyleSheet,TextInput,TouchableOpacity,FlatList,Alert} from "react-native"; 
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home(){
    function handleParticipantAdd (name:string) {
        if(participants.includes('pedro')){
          return Alert.alert("Opa! - Duplicidade","Essa pessoa já esta convdada");
        }
        
    }
    function handleParticipantRemove (name:string) {
        Alert.alert("Removendo...",`deseja mesmo remover o ${name}?`,
        [
          {
            text: 'Confirmar',
            onPress: () => Alert.alert (`O participante "${name}" foi deletado`)
            
          },
          {
            text: "Cancelar",
            style: 'cancel'
          }
        ])
      
    }

    const participants = ['pedro','juliana','Lyanne','sorencia','junio','leo','alyson','gustavo','naruto','sasuske']

  return(

    <View style={styles.container}>

     
      <Text style={styles.eventNAme}>
        Wesley Safadão em Teresina 
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de novembro de 2024.
      </Text>

    <View style={styles.form}> 
      <TextInput style={styles.input}
      placeholder="Nome do participante"
      placeholderTextColor={'#6B6B6B'}
      
      
      />
      <TouchableOpacity style={styles.button} onPress={() =>handleParticipantAdd('sorencia')} >
        <Text style={styles.buttonText}>
            +
        </Text>
    
      </TouchableOpacity>

    </View>  

        <FlatList
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() =>(
          <Text style={styles.listEmptyText}>
            Adicione mais pessoas a sua lista de presença
          </Text>
        )}
        data={participants}
        keyExtractor={item => item}
        renderItem={({item})=>(
          <Participant 
          key={item}
          name={item} 
          remove={() => handleParticipantRemove(item)}/>
        )}
        />
 
    </View>
  )
}