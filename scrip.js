
const calendar = document.getElementById('calendar');
const reservationForm = document.getElementById('reservation-form');


function generarCalendario() {
  
    const diasDisponibles = ['2023-09-10', '2023-09-15', '2023-09-20']; 

    
    const calendarioHTML = [];
    const fechaHoy = new Date();

    for (let i = 0; i < 30; i++) {
        const fecha = new Date();
        fecha.setDate(fechaHoy.getDate() + i);
        const fechaISO = fecha.toISOString().split('T')[0];

      
        const esDiaDisponible = diasDisponibles.includes(fechaISO);

       
        calendarioHTML.push(`<div class="dia ${esDiaDisponible ? 'disponible' : 'no-disponible'}">${fecha.getDate()}</div>`);
    }

    calendar.innerHTML = calendarioHTML.join('');
}


generarCalendario();


calendar.addEventListener('click', (e) => {
    if (e.target.classList.contains('disponible')) {
      
        const fechaSeleccionada = e.target.textContent;
        reservationForm.innerHTML = `
            <h2>Reservar para el ${fechaSeleccionada}</h2>
            <button onclick="realizarReserva('${fechaSeleccionada}')" class="reservar">Reservar</button>
        `;

    }
});



function realizarReserva(fechaSeleccionada) {
 
   console.log(`Reservaste para el ${fechaSeleccionada}`);

}
