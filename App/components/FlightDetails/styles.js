import {StyleSheet} from 'react-native';
import {whiteColor, lightGreyColor} from '../../global';

const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
  spaceBetween: {justifyContent: 'space-between'},
  bold: {fontWeight: 'bold'},
  label: {fontSize: 12, color: 'grey'},
  rightAlign: {textAlign: 'right'},
  card: {
    borderRadius: 7,
    padding: 10,
    elevation: 2,
    backgroundColor: whiteColor,
  },
  hr: {
    borderBottomColor: lightGreyColor,
    flex: 1,
    borderBottomWidth: 1,
    paddingTop: 10,
    marginBottom: 10,
  },
  aircraftIcon: {
    transform: [{rotate: '35deg'}],
    position: 'absolute',
    left: '45%',
  },
  dateLabel: {
    fontSize: 12,
    color: 'grey',
  },
  boldLabel: {fontSize: 12, fontWeight: 'bold'},
  sign: {
    backgroundColor: whiteColor,
    borderRadius: 7,
    elevation: 3,
    color: 'black',
    padding: 3,
  },
  count: {paddingRight: 10, paddingLeft: 10, textAlignVertical: 'center'},
  signs: {paddingTop: 5},
});

export default styles;
