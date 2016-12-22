import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import ReactDOM from 'react-dom'
import moment from 'moment';

import 'react-day-picker/lib/style.css';

const overlayStyle = {
  position: 'absolute',
  background: 'white',
  boxShadow: '0 2px 5px rgba(0, 0, 0, .15)',
};

export default class InputFieldOverlay extends Component {

  constructor() {
    super();
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
    this.handleContainerMouseDown = this.handleContainerMouseDown.bind(this);

    this.state = {
      showOverlay: false,
      value: '',
      selectedDay: null,
    };
    this.input = null;
    this.daypicker = null;
    this.clickedInside = false;
    this.clickTimeout = null;
  }



  componentWillUnmount() {
    clearTimeout(this.clickTimeout);
  }


  handleContainerMouseDown() {
    this.clickedInside = true;
    console.log('1')
    // The input's onBlur method is called from a queue right after onMouseDown event.
    // setTimeout adds another callback in the queue, but is called later than onBlur event
    this.clickTimeout = setTimeout(() => {
      console.log('4')
      this.clickedInside = false;
    }, 0);
  }

  handleInputFocus() {
    console.log('focus')
    this.setState({
      showOverlay: true,
    });
  }

  handleInputBlur() {
    const showOverlay = this.clickedInside;
    console.log('blur')
    console.log(showOverlay)

    this.setState({
      showOverlay,
    });

    // Force input's focus if blur event was caused by clicking on the calendar
    if (showOverlay) {
      this.input.focus();
    }
  }

  handleInputChange(e) {
    const { value } = e.target;
    const momentDay = moment(value, 'L', true);
    if (momentDay.isValid()) {
      this.setState({
        selectedDay: momentDay.toDate(),
        value,
      }, () => {
        this.daypicker.showMonth(this.state.selectedDay);
      });
    } else {
      this.setState({ value, selectedDay: null });
    }
  }


  handleDayClick(e, day) {
    this.setState({
      value: moment(day).format('L'),
      selectedDay: day,
      showOverlay: false,
    });
    this.input.blur();
  }

  render() {
    return (
      <div onMouseDown={ this.handleContainerMouseDown }>
        <input
          type="text"
          ref={ el => { this.input = el; } }
          placeholder="DD/MM/YYYY"
          value={ this.state.value }
          onChange={ this.handleInputChange }
          onFocus={ this.handleInputFocus }
          onBlur={ this.handleInputBlur }
        />
        { this.state.showOverlay &&
          <div style={ { position: 'relative' } }>
            <div style={ overlayStyle }>
              <DayPicker
                ref={ el => { this.daypicker = el; } }
                onDayClick={ this.handleDayClick }
                selectedDays={ day => DateUtils.isSameDay(this.state.selectedDay, day) }
              />
            </div>
          </div>
        }
      </div>
    );
  }
}

ReactDOM.render(
  <InputFieldOverlay />,
  document.getElementById('main')
)