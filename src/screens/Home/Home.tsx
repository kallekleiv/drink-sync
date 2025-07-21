import { View } from 'react-native';
import { AddDrinkModal, DrinkLog, Drunkometer } from '../../components';
import { useDrinkLog } from '../../context/DrinkLogContext';
import styles from './styles';

const Home = () => {
  const { currentBAC } = useDrinkLog();
  return (
    <View style={styles.container}>
      <Drunkometer BAC={currentBAC} />
      <AddDrinkModal />
      <DrinkLog />
    </View>
  );
};

export default Home;
