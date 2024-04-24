Resistor Color Duo

Problema

El ejercicio se trata  en crear una función que tome dos colores como entrada, representados por cadenas, y devuelva el valor de resistencia correspondiente de acuerdo con el código de colores de los resistores. Cada color tiene asignado un valor numérico, y la función debe combinar los valores de los dos colores para calcular el valor total de la resistencia.

SOLUCION

La solución para este ejercicio fue usar un array predefinido de colores y encontrar los índices de los colores de entrada en ese array. Luego, concatené los índices de los dos colores y los convertí en un número entero utilizando parseInt.

Creé una cadena que contiene los índices de los colores de entrada, y luego la convertí en un número entero mediante parseInt. Esto me dio un valor que representa los dígitos de la resistencia. Sin embargo, reconozco que mi enfoque no considera el valor posicional de los colores en la codificación de colores de los resistores.

Los colores de entrada son "brown" y "black", mi solución devolverá 10. Pero en la codificación de colores de resistores, "brown" representa el primer dígito y "black" representa el segundo dígito. Por lo tanto, el valor correcto de la resistencia debería ser 100 ohmios, ya que "brown" representa 1 y "black" representa 0 en la posición de las decenas.

Resistor Color Trio

Problema

Crear una función que tome tres colores como entrada y devuelva el valor de resistencia correspondiente, siguiendo el código de colores de los resistores.

Cada color tiene un valor numérico asociado. Pero aquí está la parte complicada: el tercer color actúa como un multiplicador para el valor obtenido de los dos primeros colores. Por lo tanto, además de identificar los valores numéricos de los colores, también debo tener en cuenta el efecto multiplicador del tercer color para calcular correctamente el valor total de la resistencia.

Solucion

Para resolver este ejercicio, primero definí un array llamado colorsNum que contiene los nombres de los colores en el orden correcto, correspondiente a sus valores numéricos. Luego, utilicé indexOf para encontrar los índices de los primeros dos colores en el array colorsNum y los multipliqué por 10 para obtener el valor numérico de la resistencia.

Verifiqué si había un tercer color en el array de entrada colores. Si encontraba uno, determinaba el prefijo correspondiente (ohms, kiloohms, megaohms o gigaohms) basándome en el índice del tercer color en el array colorsNum. Luego, ajustaba el prefijo y el valor numérico de la resistencia en consecuencia utilizando Math.pow(10, prefijo) para calcular el valor multiplicativo.

Finalmente, el valor de la resistencia concatenado con el prefijo correspondiente, o simplemente el valor de la resistencia si no había un tercer color presente en el array de entrada.


