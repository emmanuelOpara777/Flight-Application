import React from 'react';
import {View, Text, Image} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {primary} from '../../global';
import styles from './styles';

const Header = ({location}) => {
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <EntypoIcon
          style={styles.locationIcon}
          name="location-pin"
          color={primary}
          size={25}
        />
        <Text style={styles.username}>{location}</Text>
      </View>
      <View>
        <Image
          style={styles.userImage}
          source={require('../../images/emma.jpg')}
        />
      </View>
    </View>
  );
};

export default Header;
