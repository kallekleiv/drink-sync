import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  drinkLogContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    maxHeight: 200, // Limit the height
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
  },
  drinkLogTitle: {
    fontSize: 18,
  },
  drinkList: {
    flexGrow: 0,
  },
  drinkLogEntry: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 3,
  },
  drink: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cell: {
    flex: 1, // Equal width per column
    textAlign: 'center',
  },
});

export default styles;
