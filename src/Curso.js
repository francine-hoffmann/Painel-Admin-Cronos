import deletarCurso from './CrudUtils';

function Curso({nome,imagem,descricao,id,eventoRedraw}){
    const exibirFormularioEdicao = () => {
        let editarCurso = document.querySelector(".editarCurso");
        editarCurso.style.display = "block";  
        document.querySelector("#editar-titulo").value = nome;
        document.querySelector("#editar-id").value = id;
        document.querySelector("#editar-descricao").value = descricao;
    }
    

    const deletar = () => {
        deletarCurso(id);
    }
    

    return(
        <tr name={id}>
            <td>{nome}</td>
            <td><img src={imagem} className="img-fluid"/></td>
            <td>{descricao}</td>
            <td>
                <button className="btnEditar" onClick={exibirFormularioEdicao}> editar</button>
                <button className="btnExcluir" onClick={deletar}> excluir</button>

            </td>
        </tr>
    )
}
export default Curso
