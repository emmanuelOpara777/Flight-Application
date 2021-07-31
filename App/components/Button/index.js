import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const Button = ({name, action}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => action()}>
        <View style={styles.btn}>
          <Text style={styles.btnLabel}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
