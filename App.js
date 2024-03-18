import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LayOut from './source/layOut';
import Description from './source/description';
import manutd from './assets/man utd.jpeg';
import Home from './source/home';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <LayOut /> */}


      {/* <Description
        name='Home jersey'
        item={manutd}
      /> */}

      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
