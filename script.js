setInterval(() => {
  let now = new Date();

  let dateTime = now.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  document.getElementById("timer").innerHTML = dateTime;
}, 1000);
