import {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {useMyContext} from '../../contexts/MyContext';
import {ApiHelper} from '../../Helper';

const HomeScreen = () => {
  const [myListData, setMyListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {updateData} = useMyContext();

  const fetchListFromApi = () => {
    setIsLoading(true);

    ApiHelper.get('/todos')
      .then(response => {
        setMyListData(response);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchListFromApi();
  }, []);

  return (
    // <MyContextProvider>
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          updateData(false);
        }}
        style={{alignSelf: 'flex-end', margin: 12}}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <FlatList
        refreshing={isLoading}
        data={myListData}
        onRefresh={() => {
          fetchListFromApi();
        }}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                height: 60,
                marginHorizontal: 10,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}>
              <Text>{'Title: ' + item.title}</Text>
              <Text>{'Id: ' + item.id}</Text>
            </View>
          );
        }}
      />
    </View>
    // </MyContextProvider>
  );
};

export default HomeScreen;
