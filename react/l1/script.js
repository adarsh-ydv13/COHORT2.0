let h1=React.createElement('h1',null,'Hello React!');
let h2=React.createElement('h2',null,'This is ReactJS');

let fiv=React.createElement('div',null,[h1,h2]);

let root=ReactDOM.createRoot(document.querySelector('#container'));

root.render(fiv);