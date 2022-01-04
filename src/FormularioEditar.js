import {editarCurso} from './CrudUtils';

function FormularioEditar({eventoRedraw}) {
  const salvar = () => {
    editarCurso();
    eventoRedraw();
    let editarCursoForm = document.querySelector(".editarCurso");
    editarCursoForm.style.display = "none";
  }

  const cancelar = () => {
    let editarCursoForm = document.querySelector(".editarCurso");
    editarCursoForm.style.display = "none";
  }

  let lf =  {margin: 5, width: 400, height: 89};
  return (
     <section className="editarCurso">
      <br/>
      <h6> Editar curso </h6>
      <ul className="cadastroCurso">
        <li><label> Nome do curso: </label> <input type="text" id="editar-titulo"/></li>
        <li><label> Id: </label> <input type="number" id="editar-id" readOnly/> </li>
        <li><label> Imagem: </label> <input type="file" id="editar-img"/></li>
        <li><label> Descrição: </label> <textarea id="editar-descricao" name="descricao" style={lf}> </textarea></li>
      </ul>
      
      <br/>
      <button className="btnEnviar" onClick={salvar}> Salvar </button>
      <button className="btnCancelar" onClick={cancelar}> Cancelar </button>
      </section>
    );
  }
  
  export default FormularioEditar;
  