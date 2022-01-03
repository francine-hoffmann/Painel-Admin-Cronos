const cursos = localStorage.getItem('cursos') ? JSON.parse(localStorage.getItem('cursos')) : require('./cursos.json');

export function criarCurso(){
    // input
    let nome = document.querySelector("#novo-Titulo").value;
    let id = document.querySelector("#novoID").value;
    let imagem = document.querySelector("#nova-Img").value;
    let descricao = document.querySelector("#novo-Descricao").value;
    
    cursos.push({
        'nome': nome,
        'imagem': imagem,
        'descricao': descricao,
        'id': id
    });
    
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

export function editarCurso(){
    let id = document.querySelector("#novoID").value;
    let curso = cursos.find(c => c.id === id);
    if (!curso){
        console.error("Curso não encontrado. Um novo curso será adicionado");
        this.criarCurso();
        return;
    }

    let nome = document.querySelector("#novo-Titulo").value;
    let imagem = document.querySelector("#nova-Img").value;
    let descricao = document.querySelector("#novo-Descricao").value;

    curso.nome = nome;
    curso.imagem = imagem;
    curso.descricao = descricao;

    let index = cursos.indexOf(curso); 
    cursos[index] = curso;
    
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

export function deletarCurso({id}){
    let curso = cursos.find(c => c.id === id);
    // if (!curso){
    //     console.error("Curso não encontrado");
    //     return;
    // }

    let index = cursos.indexOf(curso);
    cursos.splice(1, index);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

export default deletarCurso

