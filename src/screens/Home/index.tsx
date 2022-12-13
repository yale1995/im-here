import { styles } from "./styles";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    "Yale Henrique Araújo dos Santos",
    "Maria Luiza de Araújo Puglia",
    "Luciano Teixeira dos Santos",
    "Marleide Barros Galdino",
    "Yure Araújo dos Santos",
    "Luiz Felipe de Araújo Puglia",
    "Patricia Cristina de Araújo Puglia e Carvalho",
    "Luiz André de Barros Puglia",
    "João Guilherme de Barros Puglia",
    "Calline de Andrade Barros",
    "Ana Xavier dos Santos",
    "Luiza Anália de Araújo",
  ];
  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar participante");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou no botão de remover participante ${name}`);
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

      <ScrollView>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
