
import React from 'react';
import './List.css';

const now = new Date();

const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const dayToday = daysOfWeek[now.getDay()];

switch(dayToday) {
  case 'Monday':
    var tasks = ['Guitar','1 hour coding','Gym'];
    break;

  case 'Tuesday':
    var tasks = ['Guitar','1 hour coding','Run','Climbing'];
    break;

  case 'Wednesday':
    var tasks = ['Guitar','1 hour coding','Gym'];
    break;

  case 'Thursday':
    var tasks = ['Guitar','1 hour coding','Run','Climbing'];
    break;

  case 'Friday':
    var tasks = ['Guitar','1 hour coding','Gym'];
    break;

  case 'Saturday':
    var tasks = ['Guitar','Climbing','Run'];
    break;

  case 'Sunday':
    var tasks = ['Guitar','Climbing','Laundry'];
    break;

  default:
    var tasks = ['something','has','gone','wrong'];
}


//converts tasks into a list 
const updatedTasks = tasks.map( (task)=> {
    return(
      <div class="wrapper">
        <input id="{task}" type="checkbox" />
        <label for="{task}">{task}</label>
      </div>
      )
});

function List() {
  return(
    <div>
      {updatedTasks}
    </div>
  );
}

export default List;
