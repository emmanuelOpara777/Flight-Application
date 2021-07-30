import React, {useState} from 'react';
import {View, TextInput, Image} from 'react-native';

import Header from '../../components/Header';
import styles from './styles';

const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Header location="Sydney Airport" />
      </View>
    </View>
  );
};

export default Home;
