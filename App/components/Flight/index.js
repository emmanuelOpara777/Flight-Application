import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';
import Button from '../Button';

const Flight = ({flight}) => {
  const bookFlight = () => {
    console.log('Book Flight');
  };

  return (
    <View style={styles.flightCard}>
      <Text style={styles.headLabel}>{flight.airport}</Text>
      <View style={[styles.wrapperItems, styles.row, styles.spaceBetween]}>
        <View>
          <Text style={[styles.label, styles.bold]}>{flight.airportCode}</Text>
          <Text style={[styles.label, styles.bold]}>
            {flight.departureTime}
          </Text>
          <Text style={[styles.bold, styles.mt7]}>{flight.amount}</Text>
        </View>

        <View style={styles.dottedLine} />

        <View>
          <Text style={[styles.label, styles.bold]}>
            {flight.destinationCode}
          </Text>
          <Text style={[styles.label, styles.bold]}>{flight.arrivalTime}</Text>
          <Text style={[styles.bold, styles.mt7, styles.color]}>
            {flight.availableSites}
          </Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../images/emma.jpg')}
            style={styles.airlineImage}
          />
        </View>
      </View>
      <View style={[styles.cardFooter, styles.row, styles.spaceBetween]}>
        <Text style={styles.bizClass}>{flight.classType}</Text>
        <Text style={styles.label}>{flight.duration}</Text>
        <Button name="Book" action={bookFlight} />
      </View>
    </View>
  );
};

export default Flight;
