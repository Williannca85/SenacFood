import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Image, Button } from 'react-native'

export default function Index(props)
{
    return(
     
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#f5cd79'}}>
            <Image 
                style={{width: 250, height:250, marginTop: 10}}
                source={{uri: "https://image.freepik.com/vetores-gratis/logotipo-tradicional-americano-fastfood_97761-183.jpg" }}
            />

          
            <TouchableOpacity 
            style={style.button}
            onPress={() => props.clicarParaEnviar()}
            >
            <Text style={{color:'#f5cd79', fontSize: 22}}>
              Testar notificação</Text>
            </TouchableOpacity> 

            <TouchableOpacity 
            style={style.button}
            onPress={() => props.clicarParaEnviar2()}
            >
            <Text style={{color:'#f5cd79',fontSize: 22}}>
              Testar notificação 2</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
            style={style.button}
            onPress={() => props.clicarParaEnviar3()}
            >
            <Text style={{color:'#f5cd79',fontSize: 22}}>
              Testar notificação 3</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={style.button}
            onPress={() => props.cancelar()}
           >
            <Text style={{color:'#ffffff', fontSize: 20}}>
              Cancelar notificações</Text>
            </TouchableOpacity>
        </View>

    )    
}

const style = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#123456',
      
      padding: 20,
      width: 300,
      marginTop: 20
    },
    buttonContainer:{
      marginLeft: 100,
      marginRight: 100,
    },
  });