import { styles } from "./styles";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { Participant } from "../../components/Participant";

export function Home() {
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

      <Participant
        name="Yale Henrique Araújo dos Santos"
        onRemove={() =>
          handleParticipantRemove("Yale Henrique Araújo dos Santos")
        }
      />
      <Participant
        name="Marleide Barros Galdino"
        onRemove={() => handleParticipantRemove("Marleide Barros Galdino")}
      />
      <Participant
        name="Maria Luiza de Araújo Puglia"
        onRemove={() => handleParticipantRemove("Maria Luiza de Araújo Puglia")}
      />
      <Participant
        name="Luciano Teixeira dos Santos"
        onRemove={() => handleParticipantRemove("Luciano Teixeira dos Santos")}
      />
      <Participant
        name="Yure Araújo dos Santos"
        onRemove={() => handleParticipantRemove("Yure Araújo dos Santos")}
      />
    </View>
  );
}
