export const generateTimes = (stepMinutes:number = 15) => {
  const times = [];
  const pad = (num: number) => (num < 10 ? '0' : '') + num;

  for (let hour = 0; hour < 24; hour++) {
    for (let minutes = 0; minutes < 60; minutes += stepMinutes) {
      times.push({
        title: `${pad(hour)}:${pad(minutes)}`,
        value: `${pad(hour)}:${pad(minutes)}`,
      });
    }
  }

  return times;
}