import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import FlightDetails from '../../components/FlightDetails';
import styles from './styles';
import {greyColor, primary} from '../../global';
import Button from '../../components/Button';
import Flight from '../../components/Flight';

const Home = () => {
  const [options] = useState([
      'Explore',
      'Flights',
      'Hotels',
      'Places',
      'Others',
    ]),
    [activeScreen, setActiveScreen] = useState(''),
    [flightData, setFlightData] = useState([
      {
        airport: 'Sydney Airport',
        airportCode: 'SDY',
        departureTime: '06: 00AM',
        amount: 'Rp 6,000',
        arrivalTime: '12:20 AM',
        classType: 'Business Class',
        duration: '2Hours 18 minutes',
        destinationCode: 'BKK',
        availableSites: '14 Remaining',
      },
      {
        airport: 'Thailand Airport',
        airportCode: 'BKK',
        departureTime: '08: 00AM',
        amount: 'Rp 6,000',
        arrivalTime: '15:20 AM',
        classType: 'Economy  Class',
        duration: '2Hours 18 minutes',
        destinationCode: 'SDY',
        availableSites: '16 Remaining',
      },
    ]);

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
            size={20}
          />
        </View>
        <View style={[styles.row, styles.spaceBetween, styles.options]}>
          {options.map((option, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigateScreen(option)}>
                <View style={styles.optionWrapper}>
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
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {activeScreen === 'Flights' ? <FlightDetails /> : null}
          {activeScreen === 'Flights' && flightData.length > 0
            ? flightData.map(flight => {
                return <Flight flight={flight} />;
              })
            : null}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
