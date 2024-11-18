import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const storedValue = localStorage.getItem(key);

  const [value, setValue] = useState<T>(() => {
    if (storedValue) {
      try {
        return JSON.parse(storedValue);
      } catch (e) {
        console.warn('Error in getting localstorage value');
        console.log('Error in getting localstorage value: ', e);
        return initialValue;
      }
    }
    return initialValue;
  });

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue] as const;
}

export default useLocalStorage;
