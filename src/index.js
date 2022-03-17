import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//render string
/*ReactDOM.render(
  'hola Mundo',document.getElementById('root')
);*/

//sin jsx
//<P>Hola mundo<p> <- se genera el resultado
/*const x=React.createElement('p',null,'Elemento HiJO');
ReactDOM.render(
  x,document.getElementById('root')
);*/

/*ReactDOM.render(
  <p>Hola Mundo</p> ,document.getElementById('root')
);*/


/*const x=<p>Hola Mundo</p>;
ReactDOM.render(
  x ,document.getElementById('root')
);*/


//para utilizar html en una funcion se debe utilizar jsx
//jsx es azucar sintactica
/*const X = () => <p>Hola Mundo JSX</p>;
ReactDOM.render(
  <X/> ,document.getElementById('root')
);*/

///otros ejemplos
/*const Li=({ children,estado,reaccion,tiempo })=>{
console.log(reaccion+" "+tiempo );
return(<li>{children} {estado} </li>);
}

const X = ()=>
<ul>
  <Li estado={'feliz'} reaccion={true} tiempo={10}> Desde Li</Li>
  <Li estado={'Fernandez'} >Vladimir</Li>
  <Li tiempo={100} >Tiempo</Li>
  <li>uno</li>
  <li>dos</li>
</ul>

ReactDOM.render(<X />,document.getElementById('root'));
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
