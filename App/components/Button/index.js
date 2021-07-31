import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const Button = ({name, action}) => {
  return (
    <View
      style={[
        styles.wrapper,
        {
          marginTop: name == 'Book' ? 0 : 20,
        },
      ]}>
      <TouchableOpacity onPress={() => action()}>
        <View
          style={[
            styles.btn,
            {
              paddingTop: name == 'Book' ? 2 : 10,
              paddingBottom: name == 'Book' ? 2 : 10,
            },
          ]}>
          <Text style={[styles.btnLabel]}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
