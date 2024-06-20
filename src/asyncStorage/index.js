import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Data stored successfully!');
  } catch (e) {
    console.error('Error storing data:', e);
    // Handle error saving data
  }
};

export const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      console.log('Data retrieved successfully');
      return JSON.parse(value);
    }
  } catch (e) {
    console.error('Error retrieving data:', e);
    // Handle error reading data
    return null;
  }
};
