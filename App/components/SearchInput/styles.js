import {StyleSheet} from 'react-native';
import {whiteColor, lightGreyColor} from '../../global';

const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
  searchRow: {
    backgroundColor: lightGreyColor,
    padding: 5,
    justifyContent: 'space-between',
    height: 45,
    flex: 4,
    borderRadius: 7,
    justifyContent: 'center',
    alignContent: 'center',
  },
  searchInput: {flex: 6},
  searchIcon: {textAlignVertical: 'center', flex: 1},
});

export default styles;
