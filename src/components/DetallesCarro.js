import { Component } from "react";
const styles = {
  detallesCarro: {
    backgroundColor: '#fff',
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.5)",
    borderRadius: "5px",
    width: "300px",
    right: 50,
  },
  ul: {
    margin: 5,
    padding: 10,
    justifyContent: "center",
  },
  producto: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "25px 25px",
    borderBottom: "solid 8px #ddd",
  },
};

class DetallesCarro extends Component {
  render() {
    const { carro } = this.props;
    console.log(carro);
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {carro.map((x) => (
            <li style={styles.producto} key={x.name}>
              <img alt={x.name} src={x.img} width="70" height="52" />
              {x.name} <span>{x.cantidad}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DetallesCarro;
