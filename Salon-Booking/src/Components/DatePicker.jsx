import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingDatePicker({ selected, onChange }) {
  return (
    <div className="w-72">
      <DatePicker
        selected={selected}
        onChange={onChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Select date and time"
        className="bg-white border border-gray-200 text-black rounded-lg p-2.5 w-full focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
}
