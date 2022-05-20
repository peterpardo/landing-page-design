import React from 'react';
import "./navbar.css";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as TodoIcon } from '../../assets/icon-todo.svg';
import { ReactComponent as CalendarIcon } from '../../assets/icon-calendar.svg';
import { ReactComponent as ReminderIcon } from '../../assets/icon-reminders.svg';
import { ReactComponent as PlanningIcon } from '../../assets/icon-planning.svg';

const Navbar = () => {
  return (
    <nav>
      <div className='navWrapper'>
        <Logo className='logo'/>

        <ul className='navContainer'>
          <li className='navItem'>
            <a href="#">
              <span>Features</span>
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>
            </a>

            <ul className='subNavContainer feature-list'>
              <li className='subNavItem'>
                <TodoIcon/>
                 <a href="#">Todo List</a> 
              </li>

              <li className='subNavItem'>
                <CalendarIcon/>
                 <a href="#">Calendar</a>
              </li>

              <li className='subNavItem'>
                <ReminderIcon/>
                 <a href="#">Reminders</a>
              </li>

              <li className='subNavItem'>
                <PlanningIcon/>
                 <a href="#">Planning</a>
              </li>
            </ul>
          </li>

          <li className='navItem'>
            <a href="#">
              <span>Company</span>
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>
            </a>

            <ul className='subNavContainer company-list'>
              <li className='subNavItem'><a href="#">History</a></li>
              <li className='subNavItem'><a href="#">Our Team</a></li>
              <li className='subNavItem'><a href="#">Blog</a></li>
            </ul>
          </li>

          <li className='navItem'>
            <a href="#">Careers</a>
          </li>

          <li className='navItem'>
            <a href="#">About</a>
          </li>
        </ul>
      </div>

      <div className='buttons'>
        <button className='btn login-btn'>Login</button>
        <button className='btn register-btn'>Register</button>
      </div>
    </nav>
  )
}

export default Navbar