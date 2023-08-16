import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistantHelper {
  setObject = (key, data) => {
    console.log('set object is called');

    const stringifiedObject = JSON.stringify(data);

    this.setValue(key, stringifiedObject);
  };

  getObject = async key => {
    const stringifiedObject = await this.getValue(key);

    return JSON.parse(stringifiedObject);
  };

  setValue = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);

      console.log('written successfully');
    } catch (e) {
      // saving error
      console.log('write error: ' + e);
    }
  };

  getValue = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored

        return value;
      }
    } catch (e) {
      // error reading value
    }
  };

  deleteValue = async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // remove error
    }
  };
}

export default new PersistantHelper();