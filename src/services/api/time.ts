const getTime = () =>
  fetch('https://timeapi.io/api/Time/current/zone?timeZone=America/Sao_Paulo')
    .then(res => res.json())
    .then(data => {
      const {hour, minute, seconds} = data;
      return `${hour}:${minute}:${seconds}`;
    });

export {getTime};
