import FormularioCursos from './FormularioCursos';
import FormularioEditar from './FormularioEditar';
import ListaCursos from './ListaCursos';
import React from 'react';


export default class Servicos extends React.Component {
    state = {
      mssg: ""
    };

    redraw = () => {
      this.setState(this.state);
    };

    exibirFormulario = () => {
      let addCurso = document.querySelector(".addCurso");

      if(addCurso.style.display === "block") {
          addCurso.style.display = "none";
      } else {
          addCurso.style.display = "block";
      }
    }

    render() {
      return (
        <section id="servicos" className="py-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col">
            <h3>Serviços</h3>
            <button className="btn-primary" onClick={this.exibirFormulario}> Adicionar novo </button>
              <FormularioCursos eventoRedraw={this.redraw}/>
              <FormularioEditar eventoRedraw={this.redraw}/>
              <ListaCursos />

            </div>
          </div>
        </div>
      </section>
    )
  }

  export default Servicos;
  