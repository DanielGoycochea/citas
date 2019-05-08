import React, { Component } from 'react';
import Header from './Components/Header'
import AgregarCita from './Components/AgregarCita'

class App extends Component {
    
    state={
      citas: []
    }



  crearCita=(nuevaCita)=>{
   
   const citas = [...this.state.citas, nuevaCita]

   console.log(citas)

   this.setState({
      citas
   })

  }

  render() {
    return (
      <div className='container'>
        <Header 
        titulo={"Administrador de citas"}
        />
        <div className="row">
          <div className='col-md-6'>
          <AgregarCita 
          crearCita={this.crearCita}
          />

          </div>
        </div>

        
      </div>
    );
  }
}

export default App;