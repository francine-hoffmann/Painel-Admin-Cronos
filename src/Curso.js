import {editarCurso,deletarCurso} from './CrudUtils';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

function Curso({nome,imagem,descricao,id,eventoRedraw}){
    const [exibir, setExibir] = useState(false);

    const salvar = () => {
      editarCurso();
      eventoRedraw();
      setExibir(false);
    }
  
    const cancelar = () => {
      setExibir(false);
    }
    const exibirFormularioEdicao = () => {
      setExibir(true);
    }

    const carregarDados = () => {
        document.querySelector("#editar-titulo").value = nome;
        document.querySelector("#editar-id").value = id;
        document.querySelector("#editar-descricao").value = descricao;
        document.querySelector("#editar-img").value = imagem;
        document.querySelector("#img-display").src = imagem;
    }
  
    const deletar = () => {
        deletarCurso(id);
        eventoRedraw();
    }

    const imagemAlterada = () => {
      document.querySelector("#img-display").src = document.querySelector("#editar-img").value;
    }

    let lf =  {width: 400, height: 100};
    let lf2 = {maxWidth: 400};
    return(
            <tr name={id}>
                <td>{nome}</td>
                <td><img src={imagem} className="img-fluid" /></td>
                <td>{descricao}</td>
                <td>
                    <button className="btnEditar" onClick={exibirFormularioEdicao}>editar</button>
                    <button className="btnExcluir" onClick={deletar}>excluir</button>
                </td>
                
                <Modal show={exibir} onHide={cancelar} onShow={carregarDados} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Editar curso</Modal.Title>
                  </Modal.Header>
                  <Modal.Body> 
                    <ul className="cadastroCurso">
                      <li><label> Nome do curso: </label> <input type="text" id="editar-titulo" placeholder={nome}/></li>
                      <li><label> Id: </label> <input type="number" id="editar-id" readOnly value={id}/> </li>
                      <li><label> Imagem: </label> <input type="text" id="editar-img" onChange={imagemAlterada}/></li>
                      <li><label> Preview: </label> <img id="img-display"style={lf2}></img></li>
                      <li><label> Descrição: </label> <textarea id="editar-descricao" name="descricao" style={lf} placeholder={descricao}> </textarea></li>
                    </ul>
                  </Modal.Body>
                  <Modal.Footer>
                    <button className="btnEnviar" onClick={salvar}> Salvar </button>
                    <button className="btnCancelar" onClick={cancelar}> Cancelar </button>
                  </Modal.Footer>
                </Modal>
            </tr>
    )
}
export default Curso
