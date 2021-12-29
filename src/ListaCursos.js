import Curso from './Curso'

function ListaCursos(){
    var cursos = JSON.parse(localStorage.getItem('cursos'));
    return(
        <table className="table my-5">
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>Imagem</td>
                    <td>Descrição</td>
                    <td>Ações</td>
                </tr>
            </thead>
            <tbody>
            {cursos.map((curso, i) => {
                return (<Curso key={i} nome={curso.nome} imagem={curso.imagem} descricao={curso.descricao} id={i}/>)
            })}
            </tbody>
        </table>
    );

}
export default ListaCursos;

