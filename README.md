# Serpiente Neón

El clásico juego de la serpiente con estilo neón, en un solo archivo HTML. No necesita instalación ni dependencias.

## Cómo jugar

**Juega en línea:** https://raymondandrade7.github.io/serpiente-neon/ (también funciona en el móvil).

O abre `index.html` en tu navegador y pulsa **JUGAR**.

Come para crecer y sumar puntos. La serpiente empieza lenta y acelera poco a poco mientras juegas; cada 20 segundos subes de nivel. Si chocas contra una pared o contra ti mismo pierdes una vida; con la última vida, termina la partida.

## Controles

| Acción | Teclado | Pantalla táctil |
| --- | --- | --- |
| Moverse | Flechas o WASD | Deslizar en cualquier parte de la pantalla |
| Pausar / seguir | Espacio o P | Botón ⏸ (también se pausa sola al cambiar de app o bloquear el teléfono) |
| Sonido on/off | M | Botón 🔊 |
| Empezar partida | Espacio o Enter | Botón JUGAR |
| Cambiar skin | 1–6 (en el menú) | Tocar una skin |

En el móvil, el giro ocurre en cuanto deslizas el dedo (sin esperar a soltarlo) y puedes encadenar varios giros en un mismo gesto.

Después de perder una vida, la serpiente se detiene hasta que eliges una dirección segura.

## Objetos

| Objeto | Efecto |
| --- | --- |
| ● Comida | +1 punto, crece 1 |
| ★ Mega | +3 puntos, crece 3 |
| ♥ Vida extra | +1 punto y +1 vida (máximo 3) |

La ★ y el ♥ aparecen de vez en cuando y desaparecen si tardas en comerlos (parpadean antes de irse).

## Tabla de récords

Si tu puntaje entra en el top 10, el juego te pide tu nombre al terminar la partida. La tabla se abre con **🏆 RÉCORDS** y se guarda en el navegador de cada dispositivo: cada persona ve los récords jugados en su propio teléfono o computadora.

## Sonidos

Los efectos (comer, estrella, vida, subir de nivel, perder) se generan en el navegador con Web Audio, sin archivos de audio. En el iPhone, si el interruptor de silencio está activado, no se escuchan.

## Skins

Neón, Arcoíris, Lava, Hielo, Galaxia y Tigre. El récord y la skin elegida se guardan en tu navegador.

## Revisión automática y publicación

- **Revisión** (`.github/workflows/ci.yml`): en cada PR y en cada push a `main` se valida el HTML con [html-validate](https://html-validate.org) y se revisa la sintaxis del JavaScript con `node --check`. Si algo falla, el PR lo muestra con ❌.
- **Publicación** (`.github/workflows/pages.yml`): cada merge a `main` publica el juego en GitHub Pages.
