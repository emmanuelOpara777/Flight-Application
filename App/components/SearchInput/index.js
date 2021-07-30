import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import {greyColor} from '../../global';

const SearchInput = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={[styles.row, styles.searchRow]}>
      <TextInput
        style={styles.searchInput}
        value={search}
        placeholder="Search"
        onChangeText={search => setSearch(search)}
      />
      <TouchableOpacity onPress={() => console.log('Search Pressed')}>
        <EntypoIcon
          style={styles.searchIcon}
          name="magnifying-glass"
          color={greyColor}
          size={25}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
