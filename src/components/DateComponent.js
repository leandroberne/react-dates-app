import React from 'react';

const DateComponent = ({ date, dates, setDates }) => {
  const { id, patient, physician, day, time, symptoms } = date;

  const handleClick = (e) => {
    const newDates = dates.filter((date) => date.id !== id);
    setDates(newDates);
  };

  return (
    <>
      <p>
        Paciente: <span>{patient}</span>
      </p>
      <p>
        Medico: <span>{physician}</span>
      </p>
      <p>
        Dia: <span>{day}</span>
      </p>
      <p>
        Hora: <span>{time}</span>
      </p>
      <p>
        Sintomas: <span>{symptoms}</span>
      </p>
      <button onClick={handleClick}>Eliminar cita</button>
    </>
  );
};

export default DateComponent;
