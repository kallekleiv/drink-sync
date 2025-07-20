import { useState } from 'react';
import { View } from 'react-native';
import { AddDrinkModal, Drunkometer } from '../../components';
import { BAC_THRESHOLDS } from '../../constants';
import styles from './styles';

const Home = () => {
  const [BAC, setBAC] = useState(BAC_THRESHOLDS.sober);
  return (
    <View style={styles.container}>
      <Drunkometer BAC={BAC} />
      <AddDrinkModal
        BAC={BAC}
        setBAC={setBAC}
      />
    </View>
  );
};

export default Home;
