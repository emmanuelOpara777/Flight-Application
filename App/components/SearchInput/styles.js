import {StyleSheet} from 'react-native';
import {whiteColor, lightGreyColor} from '../../global';

const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
  searchRow: {
    backgroundColor: lightGreyColor,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    height: 35,
    flex: 4,
    borderRadius: 7,
    alignContent: 'center',
  },
  searchInput: {flex: 6},
  searchIcon: {textAlignVertical: 'center', flex: 1},
});

export default styles;
