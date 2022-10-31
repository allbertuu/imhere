import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 8,
    fontSize: 16,
    padding: 16,
    color: "#fff",
    flex: 1,
    marginRight: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
});

export const stylesInfos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  input: {
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 8,
    fontSize: 16,
    padding: 16,
    color: "#fff",
    minWidth: "80%",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  button: {
    width: "100%",
    height: 48,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#31CF67",
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    marginTop: 16,
  },
  label: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});
