let calendar = document.getElementById('calendar');
let reservationForm = document.getElementById('reservation-form');
let diasDisponibles = ['2023-09-15', '2023-09-20', "2023-09-21"];
let dia;

let fechaActual = new Date();
let year = fechaActual.getFullYear();
let mes = fechaActual.getMonth() + 1; 
let diaActual = fechaActual.getDate();


function generarCalendario() {
    let calendarioHTML = [];
    let fechaHoy = new Date();

    for (let i = 0; i < 30; i++) {
        let fecha = new Date();
        fecha.setDate(fechaHoy.getDate() + i);
        let fechaISO = fecha.toISOString().split('T')[0];
        let esDiaDisponible = diasDisponibles.includes(fechaISO);
        calendarioHTML.push(`<div id="${fechaISO}" class="dia ${esDiaDisponible ? 'disponible' : 'no-disponible'}">${fecha.getDate()}</div>`);
    }

    calendar.innerHTML = calendarioHTML.join('');
}





calendar.addEventListener('click', (e) => {
    if (e.target.classList.contains('disponible')) {
      
        const fechaSeleccionada = e.target.textContent;
        reservationForm.innerHTML = `
            <h2>Reservar para el ${fechaSeleccionada}</h2>
            <button onclick="realizarReserva('${fechaSeleccionada}')" class="reservar">Reservar</button>
        `;

    }
});
let boton =document.querySelector(".reservar")



function realizarReserva(fechaSeleccionada) {
 
   console.log(`Reservaste para el ${fechaSeleccionada}`);

}

generarCalendario();