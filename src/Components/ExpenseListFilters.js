import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "../actions/filters";

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = (event) => {
    this.props.setTextFilter(event.target.value);
  };

  onSortChange = (event) => {
    if (event.target.value === "date") {
      this.props.sortByDate();
    } else if (event.target.value === "amount") {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDateId="Start Date"
          startDate={this.props.filters.startDate}
          endDateId="End Date"
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
          small={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
