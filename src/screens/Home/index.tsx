import { styles } from "./styles";

import { View, Text } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Terça, 6 de Dezembro 2022.</Text>
    </View>
  );
}
