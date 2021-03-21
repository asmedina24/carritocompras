import React from 'react';
import {Card, CardTitle, CardText, CardBody, CardImg, CardSubtitle, Col} from 'reactstrap';
import './producto.css'
import FichaProducto from './FichaProducto'

class Producto extends React.Component {
    render(){
    return (
        <Col sm="6">
        <Card className="Card" body outline color="success" >
           <CardImg  src={this.props.imagen}/>
           <CardBody>
               <CardTitle> <b>Nombre:</b> {this.props.titulo}
                   
               </CardTitle>
               <CardSubtitle><b>Valor de:</b> {this.props.precio}</CardSubtitle>
               <CardText> {this.props.texto} </CardText>
             <FichaProducto props={this.props}/>
           </CardBody>


        </Card>
        </Col>


    );
}
}

export default Producto;
