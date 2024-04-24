export function decodedValue(colors:string[]) {
  const bands = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

  return bands.indexOf(colors[0]) * 10 + bands.indexOf(colors[1]);
}
