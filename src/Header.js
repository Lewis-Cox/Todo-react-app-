import React from 'react';
import './Header.css';
const now = new Date();

const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const dayToday = daysOfWeek[now.getDay()];

function Header() {
  return (
  <div class="header">
  <header>
    <h1>To-do: {dayToday}</h1>
  </header>
  </div>
  );
}

export default Header
