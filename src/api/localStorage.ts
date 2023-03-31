import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (storageKey: string) => {
  try {
    const jsonString = await AsyncStorage.getItem(storageKey);
    return jsonString != null ? JSON.parse(jsonString) : null;
  } catch (e) {
    console.error(e);
  }
};

export const storeData = async (storageKey: string, value: any) => {
  try {
    const jsonString = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonString);
  } catch (e) {
    console.error(e);
  }
};
