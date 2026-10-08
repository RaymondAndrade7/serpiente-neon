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
| Volumen de música y efectos | — (M silencia todo) | Botón 🔊 |
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

Si tu puntaje entra en el top 10, el juego te pide tu nombre al terminar la partida. La tabla se abre con **🏆 RÉCORDS** y tiene dos pestañas:

- **🌍 Todos:** el top 10 de todos los jugadores, guardado en [Supabase](https://supabase.com). El líder aparece en el menú como "👑 Líder mundial".
- **📱 Este equipo:** los récords jugados en tu propio dispositivo (se guardan en el navegador y funcionan sin internet).

La tabla online se configura con `ONLINE.url` y `ONLINE.key` al inicio del `<script>` en `index.html`, y la tabla de la base de datos se crea con [`supabase/scores.sql`](supabase/scores.sql). Si están vacíos, el juego usa solo la tabla local.

## Música y sonidos

Música arcade de fondo y efectos (comer, estrella, vida, subir de nivel, perder), todo generado en el navegador con Web Audio, sin archivos de audio. La música acelera un poco con cada nivel. El volumen de cada uno se ajusta con el botón 🔊. En el iPhone, si el interruptor de silencio está activado, no se escuchan.

## Fuego

Desde el nivel 2 la serpiente echa fuego del color de su skin, y se vuelve más intenso en cada nivel: primero llamitas en la cabeza, luego en el cuerpo, un aura alrededor de la cabeza y chispas (de colores desde el nivel 7). Al subir de nivel explota una lluvia de chispas.

## Skins

Neón, Arcoíris, Lava, Hielo, Galaxia y Tigre. El récord y la skin elegida se guardan en tu navegador.

## Revisión automática y publicación

- **Revisión** (`.github/workflows/ci.yml`): en cada PR y en cada push a `main` se valida el HTML con [html-validate](https://html-validate.org) y se revisa la sintaxis del JavaScript con `node --check`. Si algo falla, el PR lo muestra con ❌.
- **Publicación** (`.github/workflows/pages.yml`): cada merge a `main` publica el juego en GitHub Pages.
