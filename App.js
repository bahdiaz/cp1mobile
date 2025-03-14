import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [productName, setProductName] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [percentageIncrease, setPercentageIncrease] = useState('');
  const [result, setResult] = useState(null);

  const calculateNewPrice = () => {
    if (!productName || !originalPrice || !percentageIncrease) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const price = parseFloat(originalPrice);
    const increase = parseFloat(percentageIncrease);
    const increaseAmount = (price * increase) / 100;
    const newPrice = price + increaseAmount;

    setResult({ price, increase, increaseAmount, newPrice });
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/dinheiro.png')} style={styles.logo} />
      <Text style={styles.title}>Calculadora de Aumento</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        value={productName}
        onChangeText={setProductName}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Valor original"
        keyboardType="numeric"
        value={originalPrice}
        onChangeText={setOriginalPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Percentual de aumento"
        keyboardType="numeric"
        value={percentageIncrease}
        onChangeText={setPercentageIncrease}
      />
      <TouchableOpacity style={styles.button} onPress={calculateNewPrice}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Valor original: R$ {result.price.toFixed(2)}</Text>
          <Text style={styles.resultText}>Aumento: {result.increase}%</Text>
          <Text style={styles.resultText}>Valor do aumento: R$ {result.increaseAmount.toFixed(2)}</Text>
          <Text style={styles.resultText}>Novo valor: R$ {result.newPrice.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f7ff',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
});

export default App;