const counter = document.getElementById('counter');
let count = 0;

const handleClick = () => {
  count += 1;
  counter.innerText = count;
  console.log(`count: ${count}`);
};
