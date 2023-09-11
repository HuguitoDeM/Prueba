let botonAgregar = document.getElementById("Agregar");
let botonEliminar = document.getElementById("Eliminar");
let calendar = document.getElementById('calendar');
let reservationForm = document.getElementById('reservation-form');
let diasDisponibles = ['2023-09-15', '2023-09-20'];
let dia;
let divBotones = document.getElementById("botones");
let fechaActual = new Date();
let year = fechaActual.getFullYear();
let mes = fechaActual.getMonth() + 1; 
let diaActual = fechaActual.getDate();
botonAgregar.addEventListener("click", () => {
  let inputElement = document.createElement("input");
  inputElement.setAttribute("type", "text");
  inputElement.setAttribute("id", "miInput");

  if (!divBotones.querySelector("input")) {
    divBotones.appendChild(inputElement);

    inputElement.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        dia = inputElement.value;
        AgregarDato(dia);
        inputElement.remove();
      }
    });
  }
  
});

function EliminarDato(dia) {
  let indice = diasDisponibles.indexOf(dia);
  if (indice !== -1) {
    diasDisponibles.splice(indice, 1);
  }
}

function AgregarDato(dia) {
    dia = parseInt(dia);
   
    if (dia >= 1 && dia <= 31) {
      if (dia < diaActual) {
        let fechaNueva = `${year}-${mes + 1}-${dia}`;
        diasDisponibles.push(fechaNueva);
        
      } else {
        let fechaNueva = `${year}-${mes}-${dia}`;
        diasDisponibles.push(fechaNueva);
      }
      console.log("Días Disponibles:", diasDisponibles);
    
      let divAgregar = document.getElementById(fechaNueva);
        if (divAgregar) {
          divAgregar.classList.remove("no-disponible");
          divAgregar.classList.add("disponible");
          console.log("hecho");
        }

    } else {
      alert("El día ingresado no es válido.");
    }
  }
  

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