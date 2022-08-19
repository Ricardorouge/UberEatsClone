import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    color: "#525252",
    fontSize: 15,
  },
  infoContainer: {
    margin: 10,
    borderBottomColor:'gray',
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  menuTitle:{
    marginVertical:10,
    fontSize:18,
    letterSpacing:0.7,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
    paddingTop:12,
    paddingLeft:14,
    color:'black',
    fontWeight:'400'
  },
});
export default styles;
