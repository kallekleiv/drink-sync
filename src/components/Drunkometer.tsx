import { Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MAX_BAC } from '../constants';
import { getDrunkFeedback } from '../utils';
import styles from './styles';

const Drunkometer = ({ BAC }: { BAC: number }) => {
  const percent = Math.min(BAC / MAX_BAC) * 100;
  const { status, message, color } = getDrunkFeedback(BAC);

  return (
    <View style={styles.drunkometer}>
      <AnimatedCircularProgress
        size={250}
        width={25}
        fill={percent}
        tintColor={color}
        backgroundColor="#E0E0E0"
        rotation={225}
        arcSweepAngle={270}
        lineCap={'round'}
      >
        {() => (
          <View style={styles.textContainer}>
            <Text style={styles.drunkometerScale}>{BAC.toFixed(3)}%</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <Text style={styles.drunkStatus}>{status}</Text>
      <Text style={styles.drunkMessage}>{message}</Text>
    </View>
  );
};

export default Drunkometer;
