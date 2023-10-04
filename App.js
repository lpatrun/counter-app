import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [count, setCount] = useState(69);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor='transparent' />

            <View style={styles.textContainer}>
                <Text style={styles.text}>{count}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => setCount(count - 1)} style={[styles.button, styles.decreaseButton]}>
                    <Text style={styles.decreaseText}>-</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => setCount(count + 1)} style={[styles.button, styles.increaseButton]}>
                    <Text style={styles.increaseText}>+</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => setCount(0)} style={[styles.button,styles.resetButton]}>
                <Text style={styles.resetText}>RESET</Text>
            </TouchableOpacity>
        </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2e1e6',
    justifyContent:'center',
    padding: 35
  },
  textContainer: {
    alignSelf: 'center',
    marginBottom: 50,
    borderBottomColor: '#a9081c',
    borderBottomWidth: 2,
  },
  text: {
    textAlign: 'center',
    padding: 20,
    fontSize: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  button: {
    paddingHorizontal: 30, 
    paddingVertical: 10, 
    borderRadius: 10,
    borderColor: '#a9081c',
    borderWidth: 2,
    shadowOffset: {
        width: 4,
        height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  decreaseButton: {
    backgroundColor: '#fefefe',  
  },
  decreaseText: {
    fontSize: 40,
  },
  increaseButton: {
    backgroundColor: '#a9081c', 
    paddingHorizontal: 25, 
    borderColor: '#fefefe',
  },
  increaseText: {
    fontSize: 40,
    color: '#fefefe'
  },
  resetButton: {
    backgroundColor: '#e2e1e6',
    paddingHorizontal: 25, 
    paddingVertical: 20, 
  },
  resetText: {
    fontSize: 40,
    textAlign: 'center',
  }
});
