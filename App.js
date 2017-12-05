import React from 'react';
import {Text , View , Button } from 'react-native';
import {StackNavigator} from 'react-navigation';

const HomeScreen =({navigation}) => (
  <View>
      <Text>
          This is the home 
        </Text>
        <Button onPress={() => navigation.navigate('Details')} 
        title="PUSH IT"
        />
    </View>
);
const DetailsScreen =() => (
  <View>
    <Text>
      Yes !!! ... YOU ARE WELCOME
      </Text>
    </View>
);

const Root = StackNavigator({

  Home : {
    screen : HomeScreen ,
    navigationOptions :{
      headerTitle : "Homy"
    },
  },
  Details : {
    screen : DetailsScreen ,
    navigationOptions :{
      headerTitle : "Detaily"
    },
  },
});
export default Root ;