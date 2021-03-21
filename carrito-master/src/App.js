import React from 'react';
import Producto from './componentes1/Producto'
import {Container, Row} from 'reactstrap'
import Navegacion from './componentes1/Navegacion'
import {listaProductos} from './listaProducto.json'
console.log(listaProductos)

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      listaProductos
    };

  }

  render(){
    const arregloComponentes = this.state.listaProductos.map((listaProductos, i) => {
     
      return(
        <Producto
        key={i}
          titulo={listaProductos.titulo}
          imagen={listaProductos.imagen}
          precio={listaProductos.precio}
          texto={listaProductos.texto}
          stock={listaProductos.stock}

        />
      )
    }
  );

    return (
 
      <Container>
        <Navegacion titulo="carrito"/>
        <Row>
          {arregloComponentes}
          
         </Row>

      </Container>
        
     );
  }
}

export default App;
