// Function to include the left 0 (1 = 01...)
const zeroFill = n => { //arrow function
    return ('0' + n).slice(-2);
}
// Days of the week (In Portuguese)
const weekPort = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];
//Months (In Portuguese)
  const monthPort =[
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
  ];

// Set interval
const interval = setInterval(() => {
    // Get the current time
    const now = new Date();

    // Format the date as dd/mm/yyyy (Brazilian format) and local time hh:mm:ss
    const dateTime = `${weekPort[now.getDay()]} <br><br>  ${zeroFill(now.getDate())}/${monthPort[now.getMonth()]}/${now.getFullYear()} - ${zeroFill(now.getHours())}:${zeroFill(now.getMinutes())}:${zeroFill(now.getSeconds())}`

    // Display on screen using div#date-time
    document.getElementById('date-time').innerHTML = dateTime;
}, 1000);