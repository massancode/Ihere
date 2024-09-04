import { Text,View,StyleSheet,TextInput,TouchableOpacity,FlatList,Alert} from "react-native"; 
import { useState } from "react";   
import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home(){
  const [participants,setParticpants] = useState<string []>([]);
  const [participantsName,setParticpantsName] = useState('');
  
    function handleParticipantAdd (name:string) {
        if(participants.includes(participantsName)){
           
          return Alert.alert("Opa! - Duplicidade","Essa pessoa já esta convdada");
        }
    
        setParticpants(prevState => [...prevState,participantsName]);
        
    
        setParticpantsName("");

        
    }
    function handleParticipantRemove (name:string) {
     
        Alert.alert("Removendo...",`deseja mesmo remover o ${name}?`,
        [
          {
            text: 'Confirmar',
            onPress: () => setParticpants(prevState => prevState.filter(item => item  !== name)),
          },
          {
            text: "Cancelar",
            style: 'cancel'
          }
        ])
      
    }

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
      onChangeText={ textInBox => setParticpantsName(textInBox) }
      defaultValue={participantsName}
      />

      <TouchableOpacity style={styles.button} onPress={() =>handleParticipantAdd('sorencia')} >
        <Text style={styles.buttonText}>
            +
        </Text>
    
      </TouchableOpacity>

    </View>  

        <FlatList
        data={participants} 
        keyExtractor={item => item}
        renderItem={({item})=>(
          <Participant 
          key={item}
          name={item} 
          remove={() => handleParticipantRemove(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() =>(
          <Text style={styles.listEmptyText}>
            Adicione mais pessoas a sua lista de presença
          </Text>
        )}
        />
 
    </View>
  )
}