import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Link } from "expo-router";


export default function App() {
  return (
    <View style={styles.container}>
       <Image source={require('../assets/saude.png')} style={styles.logo}/>

      <Text style={styles.titulo}>CardioLife</Text>
      <Text style={styles.text}>
      Fazendo seu coração pulsar com saúde.
      </Text>

      <View style={styles.divInputs}>
        <TouchableOpacity style={styles.agendamentoButton}>
          <Link 
          href="/telaAgendamento"
          style={{textAlign: 'center',  color: 'white'}}>
            Agendamento
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registrosButton}>
          <Link 
          href="/telaRegistros"
          style={{textAlign: 'center',  color: 'white'}}>
            Registros
          </Link>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: "10%",
  },
  logo: {
    alignSelf: 'center',
    height: '15%',
    width: '30%',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20
  },
  text: {
    margin: '6%',
    textAlign:'center',
  },
  divInputs: {

  },
  agendamentoButton: {
    backgroundColor: '#6AADA8',
    margin: "3%",
    borderRadius: '5%',
    padding: "4%",
  },
  registrosButton: {
    backgroundColor: '#6AADA8',
    margin: "3%",
    borderRadius: '5%',
    padding: "4%",
  },
});
