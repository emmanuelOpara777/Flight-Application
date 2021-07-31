import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import styles from './styles';
import {greyColor, primary} from '../../global';

const Home = () => {
  const [options] = useState([
      'Explore',
      'Flights',
      'Hotels',
      'Places',
      'Others',
    ]),
    [activeScreen, setActiveScreen] = useState('');

  const navigateScreen = active => {
    setActiveScreen(active);
  };

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
        <View style={[styles.row, styles.spaceBetween, styles.options]}>
          {options.map((option, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigateScreen(option)}>
                <Text
                  style={[
                    styles.optionText,
                    {color: activeScreen === option ? primary : 'black'},
                  ]}>
                  {option}
                </Text>
                {activeScreen === option ? (
                  <EntypoIcon
                    style={styles.dot}
                    name="dot-single"
                    color={primary}
                    size={15}
                  />
                ) : null}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Home;
