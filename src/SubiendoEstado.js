import {Component} from 'react'


class Input extends Component{
render(){
    return (
    <input
    value={this.props.value}
    onChange={this.props.onChange}
    />)
}
}

class SubiendoEstado extends Component{
    state={
        nombre:'',
        apellido:'',
    }
    
    UpdateNombre=(v)=>{
        console.log(this);
        this.UpdateValues('nombre',v.target.value);
    }

    UpdateValues=(prop,value)=>{
        this.setState({[prop]:value})
    }
    render(){
        return(
            <p>Nombre: {`${this.state.nombre} ${this.state.apellido}`}
            <Input
                value={this.state.nombre}
                onChange={this.UpdateNombre}
            />
            <Input
                value= {this.state.apellido}
                onChange={e => this.UpdateValues('apellido',e.target.value)}
            />
            </p>
        )
    }
}

export default SubiendoEstado