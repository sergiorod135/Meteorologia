// Punto de Humedad
const humidityPoint = document.createElement('div');
humidityPoint.className = 'humidity-point';
humidityPoint.innerHTML = '<p>Humedad: 70%</p>';
document.querySelector('.weather-column').appendChild(humidityPoint);

// Imagen del Tiempo
const weatherImage = document.createElement('img');
weatherImage.src = 'tiempo1.jpg'; // Asegúrate de tener la imagen en el mismo 

directorio
weatherImage.alt = 'Imagen del Tiempo';
weatherImage.className = 'weather-image';
document.querySelector('.weather-column').appendChild(weatherImage);

// Actualización de mediciones (sustituye el contenido con tus valores reales)
document.getElementById('pressure-value').innerText = '1013 hPa';
document.getElementById('wind-direction-value').innerText = 'N';
document.getElementById('humidity-value').innerText = '70%';


// Horario de Autobuses
const busSchedule = document.createElement('div');
busSchedule.className = 'bus-schedule';
busSchedule.innerHTML = '<p>Autobuses: 10:00 AM - 6:00 PM</p>';
document.querySelector('.transport-column').appendChild(busSchedule);

// Horario de Trenes
const trainSchedule = document.createElement('div');
trainSchedule.className = 'train-schedule';
trainSchedule.innerHTML = '<p>Trenes: 8:00 AM - 9:00 PM</p>';
document.querySelector('.transport-column').appendChild(trainSchedule);

// Imagen de Transporte
const transportImage = document.createElement('img');
transportImage.src = 'transporte1.jpg'; // Asegúrate de tener la imagen en el mismo 

directorio
transportImage.alt = 'Imagen de Transporte';
transportImage.className = 'transport-image';
document.querySelector('.transport-column').appendChild(transportImage);

const { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } = Recharts;

// Datos para el gráfico de barras
const temperatureData = [
  { hour: '8 AM', temperature: 20 },
  { hour: '12 PM', temperature: 30 },
  { hour: '4 PM', temperature: 35 },
  { hour: '9 PM', temperature: 25 },
];

// Configuración del gráfico
const TemperatureChart = () => {
  return (
    <BarChart width={300} height={150} data={temperatureData}>
      <Bar dataKey="temperature" fill="#8884d8" />
    </BarChart>
  );
};

ReactDOM.render(<TemperatureChart />, document.getElementById('temperature-chart'));

import * as Recharts from 'recharts';

