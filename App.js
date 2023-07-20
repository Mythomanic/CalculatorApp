import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, TextInput, Image, Text, TouchableOpacity, View, FlatList, Button } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { appStyles } from './App.styles'; // Renamed to appStyles
import { useState } from 'react';



export default function App() {
  const [placeholderValue, setPlaceholderValue] = useState('');

  const handleEvaluate = () => {
    try {
      const result = eval(placeholderValue); // Evaluate the expression
      setPlaceholderValue(result.toString()); // Update the placeholderValue with the result
    } catch (error) {
      setPlaceholderValue('Error'); // If an error occurs during evaluation, display "Error"
    }
  };
  

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <View style={appStyles.headerTop}>



            <View style={appStyles.containerHeader}>

              <Text style={appStyles.testText}>Calculator</Text>
            </View>





          </View>


          <View style={appStyles.textAreaCalculator}>

            <Text style={appStyles.CalculatorText}>{placeholderValue}</Text>

          </View>

          <View style={appStyles.calculatorContainer}>




            <View style={appStyles.allButtonsContainer}>

              <View style={appStyles.InnerButtonsContainerThreeItems}>

                <TouchableOpacity style={appStyles.calcButtonBorder}
                onPress={() => setPlaceholderValue(placeholderValue + "*")}>
                  <Text style={appStyles.buttonText}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity style={appStyles.calcButtonBorder}
                onPress={() => setPlaceholderValue(placeholderValue + "/")}>
                  <Text style={appStyles.buttonText}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity style={appStyles.calcButtonBorder}
                onPress={() => setPlaceholderValue('')}>
                  <Text style={appStyles.buttonText}>AC</Text>
                </TouchableOpacity>


              </View>

          

              <View style={appStyles.InnerButtonsContainerFourItems}>
              

              <TouchableOpacity style={appStyles.calcButtonBorder}
              onPress={() => setPlaceholderValue(placeholderValue + '1')}>
                  <Text style={appStyles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={appStyles.calcButtonBorder}
                onPress={() => setPlaceholderValue(placeholderValue + '2')}>
                  <Text style={appStyles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={appStyles.calcButtonBorder}
                onPress={() => setPlaceholderValue(placeholderValue + '3')}>
                  <Text style={appStyles.buttonText}>3</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={appStyles.calcButtonBorder}
                onPress={() => setPlaceholderValue(placeholderValue + "+")}>
                  <Text style={appStyles.buttonText}>+</Text>
                </TouchableOpacity>


              </View>

              <View style={appStyles.InnerButtonsContainerFourItems}>

              
              <TouchableOpacity style={appStyles.calcButtonBorder}
              onPress={() => setPlaceholderValue(placeholderValue + '4')}>
                  <Text style={appStyles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={appStyles.calcButtonBorder}
                onPress={() => setPlaceholderValue(placeholderValue + '5')}>
                  <Text style={appStyles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={appStyles.calcButtonBorder}
                onPress={() => setPlaceholderValue(placeholderValue + '6')}>
                  <Text style={appStyles.buttonText}>6</Text>
                </TouchableOpacity>
                
                

                <TouchableOpacity style={appStyles.calcButtonBorder}
                onPress={() => setPlaceholderValue(placeholderValue + "-")}>
                  <Text style={appStyles.buttonText}>-</Text>
                </TouchableOpacity>


              </View>
              <View style={appStyles.InnerButtonsContainerFourItems}>
              

              <TouchableOpacity style={appStyles.calcButtonBorder}
              onPress={() => setPlaceholderValue(placeholderValue + '7')}>
                  <Text style={appStyles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={appStyles.calcButtonBorder}
                onPress={() => setPlaceholderValue(placeholderValue + '8')}>
                  <Text style={appStyles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={appStyles.calcButtonBorder}
                onPress={() => setPlaceholderValue(placeholderValue + '9')}>
                  <Text style={appStyles.buttonText}>9</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={appStyles.calcButtonBorder}
                onPress={handleEvaluate}>
                  <Text style={appStyles.buttonText}>=</Text>
                </TouchableOpacity>
                


              </View>

        
             
              <View style={appStyles.InnerButtonsContainerZero}>

                

              <TouchableOpacity style={appStyles.calcButtonBorder}
              onPress={() => setPlaceholderValue(placeholderValue + '0')}>
                  <Text style={appStyles.buttonText}>0</Text>
                </TouchableOpacity>
                


              </View>
              



            </View>


          </View>


        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
