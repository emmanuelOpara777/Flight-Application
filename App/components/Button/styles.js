import {StyleSheet} from 'react-native';
import {whiteColor, lightGreyColor, primary} from '../../global';

const styles = StyleSheet.create({
  wrapper: {marginTop: 20},
  btn: {
    backgroundColor: primary,
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
  },
  btnLabel: {color: whiteColor},
});

export default styles;
