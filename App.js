import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [dadosVisor, setDadosVisor] = useState('');
  const [operacao, setOperacao] = useState('');
  const [valor1, setValor1] = useState(0);

  function addNumeroAoVisor(num) {
    setDadosVisor(dadosVisor + num);
  }  
    
    function subritairnumero(num) {
   setDadosVisor(dadosVisor - num); 
  }
  function multiplicarnum(num) {
    setDadosVisor(dadosVisor * num); }

    function divisaonumero(num) {
      setDadosVisor(dadosVisor / num); 
     }
    
    

  function limparVisor() {
    setDadosVisor('');                // dadosVisor = '';
  }

  function configOperacao(op) {
    setOperacao(op);                  // operacao = op;
    setValor1(Number(dadosVisor));    // valor1 = Number(dadosVisor);
    limparVisor();
  }

  function executarOperacao() {
    if (operacao == '+') {
 setDadosVisor(valor1 + Number(dadosVisor));
}
      if (operacao=="-"){
  setDadosVisor(valor1 - Number(dadosVisor)); 
}
if (operacao=="*"){
  setDadosVisor(valor1 * Number(dadosVisor)); 
}
if (operacao=="/"){
  setDadosVisor(valor1 / Number(dadosVisor)); 
}

  }

  return (
    <View style={styles.container}>
      
      <TextInput style={styles.estilo_visor}
       editable={false}
       value={dadosVisor}></TextInput>

      <View style={styles.view_linha}>
        <TouchableOpacity style={styles.botao_num}
          onPress={() => addNumeroAoVisor('7')}>
          <Text style={styles.texto_botao}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao_num}
          onPress={() => addNumeroAoVisor('8')}>
          <Text style={styles.texto_botao}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao_num}
          onPress={() => addNumeroAoVisor('9')}>
          <Text style={styles.texto_botao}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao_num}
          onPress={() => limparVisor()}>
          <Text style={styles.texto_botao}>C</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view_linha}>
        <TouchableOpacity style={styles.botao_num}
          onPress={() => addNumeroAoVisor('4')}>
          <Text style={styles.texto_botao}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao_num}
          onPress={() => addNumeroAoVisor('5')}>
          <Text style={styles.texto_botao}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao_num}
          onPress={() => addNumeroAoVisor('6')}>
          <Text style={styles.texto_botao}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao_num}
          onPress={() => configOperacao('+')}>
          <Text style={styles.texto_botao}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view_linha}>
        <TouchableOpacity style={styles.botao_num}
          onPress={() => addNumeroAoVisor('1')}>
          <Text style={styles.texto_botao}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao_num}
          onPress={() => addNumeroAoVisor('2')}>
          <Text style={styles.texto_botao}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao_num}
          onPress={() => addNumeroAoVisor('3')}>
          <Text style={styles.texto_botao}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao_num}
          onPress={() => executarOperacao()}>
          <Text style={styles.texto_botao}>=</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.view_linha}> 

      <TouchableOpacity style={styles.botao_num}
          onPress={() => addNumeroAoVisor('0')}>
          <Text style={styles.texto_botao}>0</Text>
        </TouchableOpacity>
        
      <TouchableOpacity style={styles.botao_num}
          onPress={() => configOperacao('-')}>
          <Text style={styles.texto_botao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao_num}
          onPress={() => configOperacao('*')}>
          <Text style={styles.texto_botao}>*</Text>
        </TouchableOpacity>
       

        <TouchableOpacity style={styles.botao_num}
          onPress={() => configOperacao('/')}>
          <Text style={styles.texto_botao}>/</Text>
        </TouchableOpacity>
        
      </View> 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  estilo_visor: {
    borderWidth: 1,
    width: '95%',
    height: '20%',
    fontSize: 60,
    borderRadius: 60,
  },

  view_linha: {
    // borderWidth: 1,
    width: '95%',
    height: '15%',
    flexDirection: 'row',
  },

  botao_num: {
    borderWidth: 1,
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },

  texto_botao: {
    fontSize: 60,
  },
});