import {StyleSheet} from 'react-native';
import {greyBGColor, whiteColor} from '../../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greyBGColor,
    padding: 10,
    paddingTop: 25,
  },
  wrapper: {
    backgroundColor: whiteColor,
    flex: 1,
    borderRadius: 30,
    paddingTop: 20,
    padding: 15,
  },
  row: {flexDirection: 'row'},
});

export default styles;
