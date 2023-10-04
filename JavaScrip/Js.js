(async () => {
  const res = await fetch("data.json");
  const data = await res.json();
  console.log(data);
  data.map(i => console.log(i))
})();
