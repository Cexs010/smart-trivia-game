# IoT Interactive Trivia

Proyecto de trivia interactiva desarrollado con arquitectura en capas (3 capas), combinando un tablero físico con ESP32 y una interfaz web construida en React, inspirada en la dinámica de Kahoot.

---

## Descripción general

El sistema permite realizar trivias de manera dinámica y presencial mediante un tablero físico con botones que los jugadores utilizan para interactuar.  
La ESP32 gestiona la lógica del juego, mientras que el frontend en React muestra la interfaz de preguntas, respuestas y puntajes en tiempo real.

---

## Arquitectura del proyecto

Este proyecto está estructurado en tres capas principales:

1. **Capa de presentación (Frontend)**  
   - Desarrollada en React.js + TailwindCss
   - Muestra la interfaz visual para las preguntas y puntajes  
   - Inspirada en Kahoot, con un diseño colorido
   - Incluye prototipos en Figma

2. **Capa de lógica (Control - ESP32)**  
   - Implementa la lógica del juego (control de respuestas, tiempos, puntuación)  
   - Conectada a un tablero físicos:  
     - 4 Push Buttons (Uno para cada jugador)
     - 1 joystick (para seleccionar la respuesta)
     - 1 Buzzer (para efectos sonoros)  
     - LEDs (apoyo visual)

3. **Capa de datos (Comunicación / API)**  
   - Intermediaria entre el tablero físico y la interfaz web.  
   - Implementada en la propia **ESP32**, la cual se conecta a Internet y actúa como **servidor web**.  
   - Gestiona las solicitudes provenientes del frontend y envía respuestas con el estado del juego, puntajes y resultados.  

---

## Tecnologías utilizadas

### Frontend
- React.js  
- Vite (opcional)  
- HTML5 / CSS3 / TailwindCSS  
- Figma (para el diseño de las interfaces)

### IoT / Hardware
- ESP32  
- Platformio IDE 
- Push Buttons  
- Buzzer
- Joystick
- LEDs
