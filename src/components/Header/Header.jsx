import React from 'react';
import { useNightMode } from '../context/NightDayModeContext';
import styles from './Header.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function Header({ filters, filter, onFilterChange }) {
  const { nightMode, toggleNightMode } = useNightMode();
  return (
    <header className={styles.header}>
      <button onClick={toggleNightMode}>
        {!nightMode && <HiMoon />}
        {nightMode && <HiSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
