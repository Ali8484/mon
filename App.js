import React from 'react' ;
import {Text , View } from 'react-native ' ;
import {TabNavigator} from 'react-navigation' ;

const HomeScreen = () => (
  <View>
    <Text>
      HOMYYYYYYY
      </Text>
    </View>
);
const SecondScreen =() => (
  <View>
      <Text>
        SECONDALYYYYYY
      </Text>
    </View>
);
const ThirdScreen =() => (
  <View>
      <Text>
        THIRDYYYYYY
        </Text>
    </View>
);
//const FourthScreen =() => (
//  <View>
  //    <Text>
//      FOURTHYYYYYY
  //    </Text>
     //     </View>
//);
const Root = TabNavigator ({
  Home : {
    screen : HomeScreen ,
    navigationOptions : {
      headertitle : 'HOME',
    },
  },
  Second : {
    screen : SecondScreen ,
    navigationOptions : {
      headertitle : 'SECOND',
    },
  },
  Third :{
    screen : ThirdScreen ,
    navigationOptions :{
      headertitle : 'THIRD'
    },
  },
 // Fourth : {
  //  screen : FourthScreen , 
 //   navigationOptions : {
 //     headertitle : 'FOURTH',
//    },
//  },
});
export default Root ;