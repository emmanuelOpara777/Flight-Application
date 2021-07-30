import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  row: {flexDirection: 'row'},
  locationIcon: {textAlignVertical: 'center'},
  username: {textAlignVertical: 'center', fontWeight: 'bold'},
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});

export default styles;
