import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import styles from './styles';
import {greyColor} from '../../global';
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Header location="Sydney Airport" />
        <View style={[styles.row, styles.spaceBetween]}>
          <SearchInput />
          <EntypoIcon
            style={styles.filterIcon}
            name="sound-mix"
            color={greyColor}
            size={25}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
