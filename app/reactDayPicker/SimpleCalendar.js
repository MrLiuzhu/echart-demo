import React from 'react';
import ReactDOM from 'react-dom'
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';


ReactDOM.render(
  <DayPicker onDayClick={ (e, day) => console.log(day) } />,
  document.getElementById('main')
  )