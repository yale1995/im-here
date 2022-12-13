import { styles } from "./styles";

import { Participant } from "../../components/Participant";

import { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participant already exists",
        "Please select any other participant, this name already is in the list."
      );
    }

    setParticipants([...participants, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      `Are you sure this?`,
      `Confirm to delet the participant ${name}. `,
      [
        {
          text: "Yes",
          onPress: () =>
            setParticipants(
              participants.filter((participant) => participant != name)
            ),
        },
        {
          text: "No",
          style: "cancel",
        },
      ]
    );
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
          onChangeText={(event) => setParticipantName(event)}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participante a sua lista de
            presença.
          </Text>
        )}
      />
    </View>
  );
}
