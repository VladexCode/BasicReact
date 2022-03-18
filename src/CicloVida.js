//componentes basados en clases
import { Component } from "react";

//componente Button
class Button extends Component {
  state = {};

  //solo se ejecuta 1 en el componente
  constructor(props) {
    super(props);

    console.log("constructor:", props);
    //mala practica
    /* this.state={ saludo: props.saludo}*/
  }

  //se ejecuta 1 sola vez despues de render
  componentDidMount() {
    console.log("componentDidMount");
  }
  //se ejecuta al actualizar el estado con el estado anterior
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate:", prevProps, ":", prevState);
  }

  componentWillUnmount() {
    console.log("deesmontando: ", this.props, " : ", this.state);
  }

  render() {
    console.log("ejecutado metodo render desde button");
    return <button onClick={() => this.setState({ prop: 1 })}>Enviar</button>;
  }
}

class CicloVida extends Component {
  //deefininmos el estado
  //el estado siempre debe declararse como stat
  state = {
    valor: 3,
  };

  //metodo mas importante render()
  render() {
    console.log("iniciando:", this.state);
    //devuelve jsx
    return (
      <div>
        <p>Hola desde class App</p>
        {this.state.valor === 3 ? <Button saludo="saludo desde app" /> : null}
        <button
          className={`${this.state.valor}`}
          //setState ejeecuta render y manipula data
          onClick={() => this.setState({ valor: 2 })}
        >
          Enviar desde App
        </button>
      </div>
    );
  }
}

export default CicloVida