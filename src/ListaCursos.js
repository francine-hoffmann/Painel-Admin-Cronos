import Curso from './Curso'
import Cursos from './CrudUtils'
function ListaCursos(){
    const cursos = localStorage.getItem('cursos') ? JSON.parse(localStorage.getItem('cursos')) : require('./cursos.json');
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

