import React from 'react';
import DayPicker from 'react-day-picker';
import ReactDOM from 'react-dom'


import 'react-day-picker/lib/style.css';

ReactDOM.render(
  <DayPicker numberOfMonths={ 4 } fixedWeeks />,
  document.getElementById('main')
)