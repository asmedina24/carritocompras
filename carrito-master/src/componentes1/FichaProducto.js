import React from 'react'
import {Button, Container, Modal, ModalFooter, ModalHeader, ModalBody, CardImg} from 'reactstrap'
import './producto.css'
import {listaCarrito} from './listaCarrito.json';

class FichaProducto extends React.Component {
    constructor(props){
        super();
        this.state ={
            modal: false,
            listaCarrito,
            stock: props.props.stock
        };

        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    agregarCarrito(){
        listaCarrito.push({
            "titulo" : this.props.props.titulo,
            "precio" : this.props.props.precio 
        });
        this.setState(prevState =>({
            modal: !prevState.modal,
           

        }));

        if(this.state.stock !== 0){
            this.setState(prevState =>({
            stock: prevState.stock -1
    
            }));
        } else{
            // alert('stock insuficiente');
            const prueba= document.getElementById('prueba');
            console.log(prueba)
            prueba.innerHTML = "Stock Insuficiente"
         }

             const badge = document.getElementById("Bagde");
             badge.innerText = listaCarrito.length;
    }

    render(){
        return(
            <Container>
                   <Button onClick={this.toggle}>Ver Ficha</Button>
                   <Modal isOpen={this.state.modal}>
                   <ModalHeader></ModalHeader>
                   <ModalBody>
                       <CardImg src={this.props.props.imagen}/>
                       <p> <b>{this.props.props.titulo}</b>  </p>
                       <p> <b>con :</b> {this.props.props.texto} </p>
                       <p>Este producto tiene un valor de :<b>{this.props.props.precio}</b> pesos </p>
                       <p>Producto con stock de: <b>{this.state.stock}</b> unidades </p>

                   </ModalBody>
                   <ModalFooter className="modalFooter">
                       <Button id="prueba"  color='primary' onClick={this.agregarCarrito}>Agregar al carrito</Button>
                       <Button color='secondary' onClick={this.toggle}>Volver atras</Button>

                   </ModalFooter>

                   </Modal>

            </Container>
         

        )
    }


}

export default FichaProducto;