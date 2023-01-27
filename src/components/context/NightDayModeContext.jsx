import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';

const NightDayModeContext = createContext();

export function NightDayModeProvider({ children }) {
  const [nightMode, setNightMode] = useState(false);
  const toggleNightMode = () => {
    setNightMode(!nightMode);
    updateNightMode(!nightMode);
  };

  useEffect(() => {
    const isNight =
      localStorage.theme === 'night' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: night)').matches);
    setNightMode(isNight);
    updateNightMode(isNight);
  }, []);
  return (
    <NightDayModeContext.Provider value={{ nightMode, toggleNightMode }}>
      {children}
    </NightDayModeContext.Provider>
  );
}

function updateNightMode(nightMode) {
  if (nightMode) {
    document.documentElement.classList.add('night');
    localStorage.theme = 'night';
  } else {
    document.documentElement.classList.remove('night');
    localStorage.theme = 'day';
  }
}

export const useNightMode = () => useContext(NightDayModeContext);
