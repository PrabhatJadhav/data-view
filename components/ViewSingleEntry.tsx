import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../navigation/navigator';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

function ViewSingleEntry() {
  const route = useRoute<DetailsScreenRouteProp>();
  const {itemId, itemTitle, itemAge, itemSalary} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{itemTitle}</Text>
      <Text style={styles.title}>{itemAge}</Text>
      <Text style={styles.title}>{itemSalary}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ViewSingleEntry;
