import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  title: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
  coffText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});