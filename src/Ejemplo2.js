//#2 ejemplo
import "./App.css";
import Button from "./boton";
//componente reutilizable

const arreglo = ["uno", "dos", "tres"];

const Ejemplo2 = () => {

  const condicional = false;

  if (condicional) {
    return <p>condicion verdadera</p>;
  }

  return (
    <div>
      <h1>Hola Mundo</h1>
      {arreglo.map((elemento) => (
        <p key={elemento}>{elemento}</p>
      ))}
      <Button onClick={(e) => console.log("clickeado", e)}>Enviar</Button>
    </div>
  );
};

export default Ejemplo2
