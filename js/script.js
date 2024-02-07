const botonesNotificacion = document.querySelectorAll(".mostrarNotificacion");
const notificacion = document.getElementById("notificacion");

// Agregar un evento de clic a cada botón
botonesNotificacion.forEach(function (boton) {
    boton.addEventListener("click", function () {
        // Mostrar la notificación
        notificacion.style.display = "block";

        // Ocultar la notificación después de 2 segundos
        setTimeout(function () {
            notificacion.style.display = "none";
        }, 2000); // 2000 milisegundos = 2 segundos
    });
});
  // Obtiene la hora de inicio almacenada en la cookie o el almacenamiento local
  let startTime = localStorage.getItem('startTime');
  if (!startTime) {
      // Si no hay una hora de inicio almacenada, establece la hora actual como hora de inicio
      startTime = new Date().getTime();
      localStorage.setItem('startTime', startTime);
  } else {
      startTime = parseInt(startTime);
  }

  const countdownElement = document.getElementById('countdown');

  function updateCountdown() {
      const currentTime = new Date().getTime();
      const timeDifference = startTime + 24 * 60 * 60 * 1000 - currentTime; // 24 horas en milisegundos
      if (timeDifference <= 0) {
          countdownElement.textContent = "¡Tiempo Agotado!";
      } else {
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

          countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
      }
  }

  // Actualiza el contador cada segundo
  setInterval(updateCountdown, 1000);

  // Llama a la función de actualización inicial
  updateCountdown();

// _____________________________________________________________________________________________________________________-



