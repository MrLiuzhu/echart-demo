import React from 'react';
import ReactDOM from 'react-dom'
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default class DisabledDays extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
    selectedDay: null,
    };
  }
  handleDayClick(e, day, { disabled, selected }) {
    console.log(selected)
    if (disabled) {
      return;
    }
    this.setState({
      selectedDay: selected ? null : day,
    });
  }
  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        <DayPicker
          selectedDays={ day => DateUtils.isSameDay(selectedDay, day) }
          disabledDays={ DateUtils.isPastDay }
          enableOutsideDays
          onDayClick={ this.handleDayClick }
        />
        <p>
          { selectedDay ? selectedDay.toLocaleDateString() : 'Please select a day 👻' }
        </p>
      </div>
    );
  }
}


ReactDOM.render(
  <DisabledDays onDayClick={ (e, day) => console.log(day) } />,
  document.getElementById('main')
  )