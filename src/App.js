//import logo from './logo.svg';
import './App.css';


const estilo2={
  boxShadow:'0 5px 3px rgba(0,0,0,0.5)'
}

const estilo=({bg="#222"})=>({
  backgroundColor:bg,
  color:'#fff',
  padding:'10px 15px',
  margin:'10px 15px'
});


const Li=({children})=>{
  return (<li style={{...estilo2,...estilo({bg:'#333'})}}
  className='clase-li'>{children}</li>)
}

const App=()=>{
  const valor="triste";
  return (<ul style={estilo({bg:"#750"})} className="clase-css">
    <Li estado="feliz">valor de li { valor }</Li>
    </ul>)
}

/*
function App() {
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}*/

export default App;
