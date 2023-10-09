import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native'



export default function RegistrosList() {
  const navigation = useNavigation()
  const data = [{
        name: 'Jorge Pilotuynter', 
        nascimento: '12/04/1967', 
        cpf: '123.123.123-12', 
        endereco: 'Rua Deide Costa, 123', 
        telefone: '9648762347'},

        {
          name: 'Pedro Hujikloter', 
          nascimento: '09/09/1999', 
          cpf: '234.234.234-23', 
          endereco: 'Avenida Arroz Cadela, 6787', 
          telefone: '1739428406'},

        {
          name: 'Jacinto Cabeção Suarez', 
          nascimento: '28/03/1978', 
          cpf: '345.345.345-34', 
          endereco: 'Servidão Humilopoto Camila, 2731', 
          telefone: '325254352'},

        {
          name: 'Marcos Bragança', 
          nascimento: '01/11/2000', 
          cpf: '456.456.456-45', 
          endereco: 'Rua Índio Sexy, 2390', 
          telefone: '5235252'}, 
        
        {
          name: 'Filomena Turca', 
          nascimento: '10/19/2002', 
          cpf: '567.567.567-56', 
          endereco: 'Rua Kilkmio Estebam, 1238', 
          telefone: '93492742'}, 
        
        {
          name: 'Regis Hujiktol', 
          nascimento: '22/02/2003', 
          cpf: '678.678.678-67', 
          endereco: 'Rua Índio Sexy, 2335', 
          telefone: '23952703'}, 
      ]

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Registros</Text>
      <Text style={styles.text}>

      </Text>

      <View>
      <FlatList
            contentContainerStyle={{justifyContent: "center", alignItems: "center"}}
            style={styles.lista} 
            data={data}
            renderItem={(
                ({item}) => (
                    <View style={styles.paciente}>
                        <Text style={styles.info}>Nome: {item.name}</Text>
                        <Text style={styles.info}>Data de nascimento: {item.nascimento}</Text>
                        <Text style={styles.info}>CPF: {item.cpf}</Text>
                        <Text style={styles.info}>Endereço: {item.endereco}</Text>
                        <Text style={styles.info}>Telefone: {item.telefone}</Text>
                    </View>
                )
            )}/>
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
    alignItems: 'center'
  },
  logo: {
    alignSelf: 'center',
    height: '15%',
    width: '17%'
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  text: {
    margin: '6%',
    textAlign:'justify',
  },
  lista: {
    textAlign: 'center',
    width: '100%',
    color: 'white',

  },
  paciente: {
    margin: 10,
    width: 300,
    backgroundColor: "#6AADA8",
    borderRadius: 10,
    padding: 20

  },
  info: {
    color: 'white'
  }
});
