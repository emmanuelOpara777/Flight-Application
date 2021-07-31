import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import {primary} from '../../global';
import Button from '../Button';
import styles from './styles';

const FlightDetails = () => {
  const [count, setCount] = useState(1);

  const doSearch = () => {
    console.log('Do search');
  };
  return (
    <View style={styles.card}>
      <View style={[styles.spaceBetween, styles.row]}>
        <View>
          <Text style={styles.label}>From</Text>
          <Text style={styles.bold}>SYD</Text>
          <Text style={styles.label}>Sydney Airport</Text>
        </View>
        <View>
          <Text style={[styles.label, styles.rightAlign]}>To</Text>
          <Text style={[styles.bold, styles.rightAlign]}>BKK</Text>
          <Text style={[styles.label, styles.rightAlign]}>
            Thailand Airport
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.hr} />
        <EntypoIcon
          style={styles.aircraftIcon}
          name="aircraft"
          color={primary}
          size={20}
        />
      </View>
      <View style={[styles.row, styles.spaceBetween]}>
        <View>
          <Text style={styles.dateLabel}>Date of departure</Text>
          <Text style={styles.boldLabel}>Thu, 18 Oct 2021</Text>
        </View>
        <View>
          <Text style={styles.label}>Passenger</Text>
          <View style={[styles.row, styles.spaceBetween, styles.signs]}>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
              <EntypoIcon style={styles.sign} name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.count}>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                if (count === 2 || count > 2) setCount(count - 1);
              }}>
              <EntypoIcon style={styles.sign} name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Button name="Search Flight" action={doSearch} />
    </View>
  );
};

export default FlightDetails;
