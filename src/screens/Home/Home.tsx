import { useState } from 'react';
import { Button, View } from 'react-native';
import Drunkometer from '../../components';
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
            setBAC(BAC + +0.025);
          }}
        ></Button>
        <Button
          title={'Wine'}
          onPress={() => {
            setBAC(BAC + +0.03);
          }}
        ></Button>
        <Button
          title={'Shot'}
          onPress={() => {
            setBAC(BAC + +0.02);
          }}
        ></Button>
      </View>
    </View>
  );
};

export default Home;
