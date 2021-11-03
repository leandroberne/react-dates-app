import React, { useState, useEffect } from 'react';
import FormComponent from './components/FormComponent';
import DateComponent from './components/DateComponent';

const App = () => {
  let initialDates = JSON.parse(localStorage.getItem('dates'));
  if (!initialDates) {
    initialDates = [];
  }

  const [dates, setDates] = useState(initialDates);

  useEffect(() => {
    localStorage.setItem('dates', JSON.stringify(dates));
  }, [dates]);

  const title =
    dates.length !== 0 ? 'Estas son sus citas' : 'No hay ninguna cita';

  return (
    <div className='App'>
      <h1>Dates App</h1>
      <FormComponent setDates={setDates} />
      <h2>{title}</h2>
      {dates.map((date) => {
        return <DateComponent date={date} dates={dates} setDates={setDates} />;
      })}
    </div>
  );
};

export default App;
