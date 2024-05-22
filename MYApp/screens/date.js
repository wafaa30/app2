import React, { useState } from 'react';
import { View, Button, DatePickerIOS, Platform, DatePickerAndroid } from 'react-native';

const MyDatePicker = () => {
  const [chosenDate, setChosenDate] = useState(new Date());

  const showDatePickerAndroid = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: chosenDate,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2018, 11, 31),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        const selectedDate = new Date(year, month, day);
        setChosenDate(selectedDate);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  return (
    <View>
      {Platform.OS === 'ios' ? (
        <DatePickerIOS
          date={chosenDate}
          onDateChange={setChosenDate}
          minimumDate={new Date(2018, 0, 1)}
          maximumDate={new Date(2018, 11, 31)}
          mode="date"
        />
      ) : (
        <Button title="Select Date" onPress={showDatePickerAndroid} />
      )}
    </View>
  );
};

export default MyDatePicker;
