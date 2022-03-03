import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'

import {notificationManager} from './src/NotificationManager'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index from './src/pages/Index'
import Ofertas from './src/pages/Ofertas'
import Ofertas1 from './src/pages/Ofertas1'
import Ofertas2 from './src/pages/Ofertas2'
import Ofertas3 from './src/pages/Ofertas3'



const Stack = createStackNavigator();
const notificador = notificationManager

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    notificador.configurar()
    notificador.criarCanal()
    notificador.agendarNotificacao()
      
  }

  clicarParaEnviar = () => {
    notificador.exibirNotificacao(
      1,
      "Confira as nossas promoções do dia",
      "Você não quer ficar de fora de nossos saborosos pratos com um monte de ofertas dessas, né?",
      {}, // data
      {} // options   
    )
  }

  clicarParaEnviar2 = () => {
    notificador.exibirNotificacao(
      2,
      "Cupom na área!",
      "Chega mais e confere os descontos que te esperam",
      {}, // data
      {} // options
    )
  }
  clicarParaEnviar3 = () => {
    notificador.exibirNotificacao(
      3,
      "Tá trabalhando ou na farra?",
      "De qualquer jeito, corre para pedir o seu almoço pelo SenacFood!",
      {}, // data
      {} // options
    )
  }
  clicarParaEnviar4 = () => {
    notificador.exibirNotificacao(
      4,
      "Feriado acabou, mas os melhores lanches estão aqui!",
      "Vem logo para o SenacFood!",
      {}, // data
      {} // options
    )
  }
  clicarParaEnviar5 = () => {
    notificador.exibirNotificacao(
      5,
      "O Carnaval do SenacFood chegou com muitas ofertas!",
      "Corre conferir!!!",
      {}, // data
      {} // options
    )
  }


  cancelar = () => {
    notificador.cancelar()
  }

  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Página Inicial" options={{title: "Bem-vindo ao SenacFood !!!"}}>
            { 
            
            ({navigation}) => { notificador.definirNavegador(navigation);
            return(<Index navegador={navigation} clicarParaEnviar={this.clicarParaEnviar} clicarParaEnviar2={this.clicarParaEnviar2} clicarParaEnviar3={this.clicarParaEnviar3} cancelar={this.cancelar}/>)
                         
            }}
          </Stack.Screen>

          <Stack.Screen name="Ofertas" options={{title: "Confira nossas promoções!"}}>
            { ({navigation}) => { return(<Ofertas navegador={navigation}/>) } }
          </Stack.Screen>

          <Stack.Screen name="Ofertas1" options={{title: "Promoções exclusivas!"}}>
            { ({navigation}) => { return(<Ofertas1 navegador={navigation} />) } }
          </Stack.Screen>

          <Stack.Screen name="Ofertas2" options={{title: "Confira os cupons!"}}>
            { ({navigation}) => { return(<Ofertas2 navegador={navigation} />) } }
          </Stack.Screen>

          <Stack.Screen name="Ofertas3" options={{title: "Confira esta promoção!"}}>
            { ({navigation}) => { return(<Ofertas3 navegador={navigation} />) } }
          </Stack.Screen>

          <Stack.Screen name="Ofertas4" options={{title: "Confira esses pratos saborosos!"}}>
            { ({navigation}) => { return(<Ofertas4 navegador={navigation} />) } }
          </Stack.Screen>

          <Stack.Screen name="Ofertas5" options={{title: "Confira os cupons!"}}>
            { ({navigation}) => { return(<Ofertas5 navegador={navigation} />) } }
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

/* Estilização do projeto */
const style = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 10
  }
});

