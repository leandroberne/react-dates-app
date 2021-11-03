import React, { useState } from 'react';
import uuid from 'uuid/dist/v4';

const FormComponent = ({ setDates }) => {
  const [date, setDate] = useState({
    patient: '',
    physician: '',
    day: '',
    time: '',
    symptoms: '',
  });

  const { patient, physician, day, time, symptoms } = date;

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setDate({ ...date, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      patient.trim().length < 8 ||
      physician.trim().length < 8 ||
      day.trim().length === 0 ||
      time.trim().length === 0 ||
      symptoms.trim().length < 8
    ) {
      setError(true);
    } else {
      setError(false);
      date.id = uuid();
      setDates((aDates) => [...aDates, date]);
      setDate({
        patient: '',
        physician: '',
        day: '',
        time: '',
        symptoms: '',
      });
    }
  };

  return (
    <>
      <h2>Complete el Formulario</h2>
      {error && <p>Campo/s incompleto/s</p>}
      <form onSubmit={handleSubmit}>
        <label>Paciente:</label>
        <input
          type='text'
          name='patient'
          placeholder='Nombre del paciente'
          onChange={handleChange}
          value={patient}
        />
        <br />
        <label>Medico:</label>
        <input
          type='text'
          name='physician'
          placeholder='Nombre del medico'
          onChange={handleChange}
          value={physician}
        />
        <br />
        <label>Dia de la consulta:</label>
        <input type='date' name='day' onChange={handleChange} value={day} />
        <br />
        <label>Hora de la consulta:</label>
        <input type='time' name='time' onChange={handleChange} value={time} />
        <br />
        <label>Sintomas del paciente:</label>
        <textarea
          type='text'
          name='symptoms'
          placeholder='Indique los sintomas'
          onChange={handleChange}
          value={symptoms}
        ></textarea>
        <br />
        <button type='submit'>Agregar cita</button>
      </form>
    </>
  );
};

export default FormComponent;
