import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Settings from './Settings';
import {useState} from 'react';
import SettingsContext from './SettingsContext';

function App() {

  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <SettingsContext.Provider value={{
        workMinutes: workMinutes,
        breakMinutes: breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
        setShowSettings
      }}>
      {showSettings ?
      <Settings />
      :
      <Timer />
      }
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
