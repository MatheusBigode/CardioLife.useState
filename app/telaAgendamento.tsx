import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';


export default function Agendamento() {

  const [name, setName] = useState()
  const [nascimento, setNascimento] = useState()
  const [cpf, setCpf] = useState()
  const [endereco, setEndereco] = useState()
  const [telefone, setTelefone] = useState()
  const [registros, setRegistros] = useState<string[]>([]);
  

  function handleAddRegistro() {
        setRegistros([name, nascimento, cpf, endereco, registros, telefone])
        console.log("Nome: " + name + "\n" +
            "Data de nascimento: " + nascimento + "\n" +
            "CPF: " + cpf + "\n" +
            "Endereço: " + endereco + "\n" +
            "Telefone: " + telefone + "\n");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Insira seus dados
      </Text>

        <TextInput
            style={styles.input}
            placeholder="Nome completo"

            value={ name }
            onChangeText={(e) => setName(e)}
        />

        <TextInput
            style={styles.input}
            placeholder="Data de nascimento"
            
            value={ nascimento }
            onChangeText={(e) => setNascimento(e)}
        />

        <TextInput
            style={styles.input}
            placeholder="CPF"
            
            value={ cpf }
            onChangeText={(e) => setCpf(e)}
        />

        <TextInput
            style={styles.input}
            placeholder="Endereço"
            
            value={ endereco }
            onChangeText={(e) => setEndereco(e)}
        />

        <TextInput
            style={styles.input}
            placeholder="Telefone"
            
            value={ telefone }
            onChangeText={(e) => setTelefone(e)}
        />

        <TouchableOpacity onPress={handleAddRegistro} style={styles.enviar}>
          <Text style={{textAlign: 'center',  color: 'white'}}>
            Salvar e enviar
          </Text>
        </TouchableOpacity>
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
    width: '20%'
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 40
  },
  divInputs: {

  },
  input: {
    alignSelf: 'center',
    color: '#000',
    backgroundColor: "#E0DFE0",
    borderRadius: 5,
    fontWeight: "200",
    width: '94%',
    margin: 10,
    padding: "4%",
  },
  enviar: {
    backgroundColor: '#6AADA8',
    margin: "3%",
    borderRadius: '5%',
    padding: "4%",
  }
});
