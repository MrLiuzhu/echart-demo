import React from 'react';
import ReactDOM from 'react-dom'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from "moment"

class SelectableDay extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: '',
    };
  }
  handleDayClick(e, day, { selected }) {
    var self = this;
    this.setState({
      selectedDay: selected ? null : day,
    },()=> {
          console.log(self.state.selectedDay.toLocaleDateString())
    });
  }
  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        <DayPicker
          selectedDays={ day => DateUtils.isSameDay(selectedDay, day) }
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
  <SelectableDay onDayClick={ (e, day) => console.log(day) } />,
  document.getElementById('main')
  )