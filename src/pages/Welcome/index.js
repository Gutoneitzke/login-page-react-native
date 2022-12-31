import React from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

export default function Welcome() {
 return (
    <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.containerForm}>
          <Text style={styles.title}>Monitore e organize seus gastos de qualquer lugar!</Text>
          <Text style={styles.subtitle}>Faça login para começar</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d'
  },
  image: {
    width: '100%',
  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: '4%',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginTop: 28,
    marginBottom: 28
  },
  subtitle: {
    color: '#a1a1a1'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#38a69d',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500'
  }
})