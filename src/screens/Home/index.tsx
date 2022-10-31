import { FunctionComponent, useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../components/Participant";
import { styles, stylesInfos } from "./styles";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [participantName, setParticipantName] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const handleAddParticipant = () => {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante existe ⛔",
        "Já existe um participante com esse nome cadastrado no sistema."
      );
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  };

  const handleRemoveParticipant = (name: string) => {
    Alert.alert("Tem certeza?", `Você deseja remover ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          );
          Alert.alert("Deletado!", "Participante deletado com sucesso ✅");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };

  const handleInfosConfirmation = () => {
    if (eventName && eventDate) {
      Alert.alert(
        "Tô de olho 👀",
        "Espero que tenha digitado as informações do evento corretamente rs",
        [
          {
            text: "Confia, po! ⚡",
            onPress: () => setConfirmation((prevState) => !prevState),
          },
        ]
      );
    }
  };

  if (!confirmation) {
    return (
      <View style={stylesInfos.container}>
        <View>
          <Text style={stylesInfos.label}>Nome do evento</Text>
          <TextInput
            style={stylesInfos.input}
            placeholder="Ex.: Rock in Rio"
            placeholderTextColor="#6b6b6b"
            onChangeText={setEventName}
            value={eventName}
          />

          <Text style={stylesInfos.label}>Data do evento</Text>
          <TextInput
            style={stylesInfos.input}
            placeholder="Ex.: 31/10/2022"
            placeholderTextColor="#6b6b6b"
            onChangeText={setEventDate}
            value={eventDate}
          />

          <TouchableOpacity
            style={stylesInfos.button}
            onPress={handleInfosConfirmation}
          >
            <Text style={stylesInfos.buttonText}>Tudo certo!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>{eventName}</Text>

      <Text style={styles.eventDate}>{eventDate}</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
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
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda. Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
};

export default Home;
