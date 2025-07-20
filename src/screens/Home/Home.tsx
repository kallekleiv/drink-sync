import { useState } from 'react';
import { Button, View } from 'react-native';
import Drunkometer from '../../components';
import { DRINKS_AC } from '../../constants';
import styles from './styles';

const Home = () => {
  const [BAC, setBAC] = useState(0);
  return (
    <View style={styles.container}>
      <Drunkometer bac={BAC} />
      <View style={styles.drinkPanel}>
        <Button
          title={'Beer'}
          onPress={() => {
            setBAC(BAC + DRINKS_AC.beer);
          }}
        ></Button>
        <Button
          title={'Wine'}
          onPress={() => {
            setBAC(BAC + DRINKS_AC.wine);
          }}
        ></Button>
        <Button
          title={'Shot'}
          onPress={() => {
            setBAC(BAC + DRINKS_AC.shot);
          }}
        ></Button>
      </View>
    </View>
  );
};

export default Home;
