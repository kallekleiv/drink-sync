import { FlatList, Pressable, Text, View } from 'react-native';
import { type DrinkEntry, useDrinkLog } from '../../context/DrinkLogContext';
import styles from './styles';

const DrinkLog = () => {
  const { drinks, clearLog } = useDrinkLog();

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const renderDrinkItem = ({ item }: { item: DrinkEntry }) => (
    <View style={styles.drinkLogEntry}>
      <Text>{formatTime(item.timestamp)}</Text>
      <View style={styles.drink}>
        <Text style={styles.cell}>{item.drink.emoji}</Text>
        <Text style={styles.cell}>{item.drink.label}</Text>
        <Text style={styles.cell}>{item.volume} ml</Text>
        <Text style={styles.cell}>{item.drink.defaultAbvPercent}%</Text>
      </View>
    </View>
  );

  if (drinks.length === 0) {
    return (
      <View style={styles.drinkLogContainer}>
        <View>
          <Text style={styles.drinkLogTitle}>Drink Log</Text>
          <Text>No drinks logged.</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.drinkLogContainer}>
      <View>
        <Text style={styles.drinkLogTitle}>Drink Log ({drinks.length})</Text>
        <Pressable onPress={clearLog}>
          <Text>Clear</Text>
        </Pressable>
      </View>

      <FlatList
        data={drinks}
        renderItem={renderDrinkItem}
        keyExtractor={(item) => item.id}
        style={styles.drinkList}
        showsVerticalScrollIndicator={false}
        inverted={true}
      />
    </View>
  );
};

export default DrinkLog;
