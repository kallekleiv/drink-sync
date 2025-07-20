import { StyleSheet } from 'react-native';
import colors from '../styles';

const styles = StyleSheet.create({
  drunkStatus: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingBottom: 10,
  },
  drunkMessage: {
    paddingBottom: 10,
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drunkometerScale: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  drunkometer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  openButton: {
    padding: 12,
    backgroundColor: 'blue',
    borderRadius: 8,
    alignSelf: 'center',
  },
  openButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  modal: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  drinkButton: {
    backgroundColor: 'lightgray',
    padding: 16,
    borderRadius: 50,
  },
  pressed: {
    opacity: 0.7,
  },
  emoji: {
    fontSize: 28,
  },
});

export default styles;
