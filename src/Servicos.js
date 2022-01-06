import FormularioCursos from './FormularioCursos';
import ListaCursos from './ListaCursos';
import React from 'react';


export default class Servicos extends React.Component {
    state = {
      mssg: ""
    };

    redraw = () => {
      this.setState(this.state);
    };

    render() {
      return (
        <section id="servicos" className="py-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col">
            <h3>Serviços</h3>
              <FormularioCursos eventoRedraw={this.redraw}/>
              <ListaCursos eventoRedraw={this.redraw}/>   
            </div>
          </div>
        </div>
      </section>
    )
  }
}


