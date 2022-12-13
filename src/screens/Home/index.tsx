import { styles } from "./styles";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { Participant } from "../../components/Participant";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar participante");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Terça, 6 de Dezembro 2022.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />
      <Participant />
    </View>
  );
}
