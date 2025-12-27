import { useEffect, useState } from 'react'
import { getTimeRemaining } from './CountDown.ultils'
import './CountDown.css'


export default function Countdown({ targetDate }) {

    const formatValue = (value) => String(value).padStart(2, "0")

    const [timeLeft, setTimeLeft] = useState(() =>
      getTimeRemaining(targetDate)
    );

    useEffect(() => {
      const interval = setInterval(() => { // Ticta every seconds
        setTimeLeft(getTimeRemaining(targetDate)); // Call the fuction in useState() => and update the state
      }, 1000);

      return () => clearInterval(interval);  // Creal Interval while the componente is disabled
    }, [targetDate]);

    if (timeLeft.total <= 0) {
      return <p>🎉 ¡El evento ha comenzado!</p>;
    }

    return (
      <div className="countdown">
        <div className='card-counter-container'>
            <span className='card-of-counDown'><p className='texto-count'>{formatValue(timeLeft.days)}</p></span>
            <p>Days</p>
        </div>
        <div className='card-counter-container'>
          <span className='card-of-counDown'><p className='texto-count'>{formatValue(timeLeft.hours)}</p></span>
          <p>Hr</p>
        </div>
        <div className='card-counter-container'>
          <span className='card-of-counDown'><p className='texto-count'>{formatValue(timeLeft.minutes)}</p></span>
          <p>Mins</p>
        </div>
        <div className='card-counter-container'>
          <span className='card-of-counDown'><p className='texto-count'>{formatValue(timeLeft.seconds)}</p></span>
          <p>Sec</p>
        </div>
      </div>
    );    
}