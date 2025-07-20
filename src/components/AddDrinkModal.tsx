import { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { DRINKS, type Drink } from '../constants';
import styles from './styles';

interface AddDrinkModalProps {
  BAC: number;
  setBAC: (bac: number) => void;
}

const AddDrinkModal = ({ BAC, setBAC }: AddDrinkModalProps) => {
  const [visible, setVisible] = useState(false);
  const handleDrink = (drink: Drink) => {
    const alcoholGrams = ((drink.defaultVolumeMl * drink.defaultAbvPercent) / 100) * 0.8;
    const bacIncrease = alcoholGrams * 0.001; // Simplified calculation
    const newBAC = BAC + bacIncrease;
    setBAC(newBAC);
    setVisible(false);
  };

  return (
    <>
      <Pressable
        style={styles.openButton}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.openButtonText}>Add Drink</Text>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <Pressable
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <Pressable
            style={styles.modal}
            onPress={() => {}}
          >
            <Text style={styles.title}>Choose Your Drink</Text>
            <View style={styles.buttonRow}>
              <Pressable
                style={({ pressed }) => [styles.drinkButton, pressed && styles.pressed]}
                onPress={() => handleDrink(DRINKS.beer)}
              >
                <Text style={styles.emoji}>{DRINKS.beer.emoji}</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [styles.drinkButton, pressed && styles.pressed]}
                onPress={() => handleDrink(DRINKS.wine)}
              >
                <Text style={styles.emoji}>{DRINKS.wine.emoji}</Text>
              </Pressable>

              <Pressable
                style={({ pressed }) => [styles.drinkButton, pressed && styles.pressed]}
                onPress={() => handleDrink(DRINKS.shot)}
              >
                <Text style={styles.emoji}>{DRINKS.shot.emoji}</Text>
              </Pressable>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};
export default AddDrinkModal;
