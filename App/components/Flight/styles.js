import {StyleSheet} from 'react-native';
import {whiteColor, lightGreyColor, primary} from '../../global';

const styles = StyleSheet.create({
  flightCard: {
    borderRadius: 7,
    marginTop: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: whiteColor,
  },
  row: {flexDirection: 'row'},
  spaceBetween: {justifyContent: 'space-between'},
  label: {fontSize: 12, color: 'grey'},
  color: {color: primary, fontSize: 12},
  bold: {fontWeight: 'bold'},
  headLabel: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  wrapperItems: {
    paddingTop: 10,
  },
  mt7: {
    marginTop: 7,
  },
  airlineImage: {
    borderRadius: 7,
    backgroundColor: whiteColor,
    width: 60,
    height: 60,
  },
  imageWrapper: {
    width: 60,
    borderRadius: 7,
    height: 60,
    elevation: 2,
    backgroundColor: whiteColor,
    marginLeft: 10,
  },
  dottedLine: {
    borderWidth: 1,
    borderRadius: 1,
    borderStyle: 'dotted',
    height: 1,
    marginRight: 10,
    borderColor: 'lightgrey',
    marginLeft: 10,
    flex: 1,
    marginVertical: 15,
  },
  cardFooter: {paddingTop: 10},
  bizClass: {
    backgroundColor: lightGreyColor,
    borderRadius: 5,
    color: primary,
    paddingRight: 4,
    paddingLeft: 4,
    fontSize: 12,
    textAlignVertical: 'center',
  },
});

export default styles;
