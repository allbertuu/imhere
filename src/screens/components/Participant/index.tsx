import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function Participant({
  name,
  onRemove,
}: {
  name: string;
  onRemove: () => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name || "Sem nome"}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
