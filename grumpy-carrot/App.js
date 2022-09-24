import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    
      <Card>
      <br/>
        <Image
        style={styles.stretch}
        source={require('./asdasdasdad.jpg')}
      />
       
      <Text style={styles.paragraph}>
     Não desista! Procure ajuda e não sofra sozinho.
      </Text> 
     
      <Image
        style={styles.stretch}
        source={require('./sdasdadasd.jpg')}
      />
     
      </Card>

      <Card style={{backgroundColor: '#000000',}}> <br/><Image
        style={styles.botao}
        source={require('./download.jpg')}
        
      /></Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    padding: 8,
    alignItems: 'center',
    width: 300,
    height: 400,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius:50,
    borderTopLeftRadius: 50,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  
  botao: {
    display: 'flex',
    alignContent:'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 30,

  }
  
  

});
