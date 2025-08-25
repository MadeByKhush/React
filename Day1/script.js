//using javascript code
const h1 = document.createElement('h1');
h1.innerText = 'Hello Khush';
const Main = document.getElementById('main');
Main.appendChild(h1);
h1.setAttribute("style", "color : blue");

//using react.js code
const h2 = React.createElement('h2', null, 'Hello From React');
console.log(h2);

const main = document.getElementById('main');
const root = ReactDOM.createRoot(main);
root.render(h2);
