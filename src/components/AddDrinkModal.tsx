import { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { DRINKS } from '../constants';
import { useDrinkLog } from '../context/DrinkLogContext';
import type { Drink } from '../types';
import styles from './styles';

const AddDrinkModal = () => {
  const [visible, setVisible] = useState(false);
  const { addDrink } = useDrinkLog();

  const handleDrink = (drink: Drink) => {
    addDrink(drink);
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
        animationType="none"
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
