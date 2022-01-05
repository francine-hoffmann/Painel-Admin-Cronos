import {criarCurso} from './CrudUtils';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

function FormularioCursos({eventoRedraw}) {
  const [exibir, setExibir] = useState(false);

  const adicionar = () => {
    criarCurso();
    eventoRedraw();
    setExibir(false);
  }

  const cancelar = () => setExibir(false);

  const exibirModal = () => setExibir(true);

  let lf =  {width: 400, height: 89};
  return (
    <div>
      <button className="btn-primary" onClick={exibirModal}> Adicionar novo </button>
      
      <Modal show={exibir} onHide={cancelar} centered>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar novo curso</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <ul className="cadastroCurso">
            <li><label> Nome do curso: </label> <input type="text" id="novo-Titulo"/></li>
            <li><label> Id: </label> <input type="number" id="novoID"/> </li>
            <li><label> Imagem: </label> <input type="file" id="nova-Img"/></li>
            <li><label> Descrição: </label> <textarea id="novo-Descricao" name="descricao" style={lf}> </textarea></li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <button className="btnEnviar" onClick={adicionar}> Adicionar </button>
          <button className="btnCancelar" onClick={cancelar}> Cancelar </button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }
  
  export default FormularioCursos;
  