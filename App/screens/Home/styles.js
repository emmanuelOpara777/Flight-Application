import {StyleSheet} from 'react-native';
import {greyColor, whiteColor, lightGreyColor} from '../../global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greyColor,
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
  spaceBetween: {justifyContent: 'space-between'},
  filterIcon: {
    textAlignVertical: 'center',
    backgroundColor: whiteColor,
    elevation: 4,
    borderRadius: 10,
    marginLeft: 15,
    paddingRight: 10,
    paddingLeft: 10,
  },
  options: {paddingTop: 15, paddingBottom: 15},
  optionText: {fontWeight: 'bold', margin: 0},
  dot: {textAlign: 'center', marginVertical: -5},
});

export default styles;
