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
    backgroundColor: '#e4e2e2ff',
  },
  drinkLogTitle: {
    fontSize: 18,
  },
  logHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    width: '100%',
  },
  clearButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ff4757',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  drinkList: {
    flexGrow: 0,
    width: '90%',
  },
  timeFormat: {
    flex: 0.4,
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
  fadeBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
  },
});

export default styles;
