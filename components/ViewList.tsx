import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootStackParamList} from '../navigation/navigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

function ViewList({dataLink}: {dataLink: string}) {
  const [dataArray, setDataArray] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [apiError, setApiError] = useState<string>('Loading...');
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    if (dataLink) {
      fetchListDataApiCall();
    }
  }, [dataLink]);

  const fetchListDataApiCall = () => {
    setLoading(true);

    fetch(dataLink)
      .then(response => response.json())
      .then(json => {
        // console.log('json', json);
        if (json?.employees?.length > 0) {
          setDataArray(json?.employees);
        } else {
          setDataArray([]);
          setApiError('No Employees Found');
        }

        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setDataArray([]);
        setLoading(false);
        setApiError('Something Went Wrong');
      });
  };

  const renderItem = ({
    item,
  }: {
    item: {id: string; name: string; age: number; salary: number};
  }) => (
    <TouchableOpacity
      key={item?.id}
      style={styles.item}
      onPress={() => {
        navigation.navigate('Details', {
          itemId: item?.id,
          itemTitle: item?.name,
          itemAge: item?.age,
          itemSalary: item?.salary,
        });
      }}>
      <Text style={styles.title}>{item?.name}</Text>
      <Text style={styles.title}>{item?.age}</Text>
      <Text style={styles.title}>{item?.salary}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading && dataArray?.length == 0 ? (
        <View style={styles.item}>
          <Text>{apiError}</Text>
        </View>
      ) : (
        <FlatList
          data={dataArray}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
  },
});

export default ViewList;
