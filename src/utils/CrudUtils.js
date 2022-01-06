const cursos = localStorage.getItem('cursos') ? JSON.parse(localStorage.getItem('cursos')) : require('./cursos.json');

export function criarCurso(){
    // input
    let nome = document.querySelector("#novo-Titulo").value;
    let imagem = document.querySelector("#nova-Img").value;
    let descricao = document.querySelector("#novo-Descricao").value;

    cursos.push({
        'nome': nome,
        'imagem': imagem,
        'descricao': descricao,
        'id': cursos.length+1
    });

    localStorage.setItem('cursos', JSON.stringify(cursos));
}

export function editarCurso(id){
    let curso = cursos.find(c => c.id == id);
    if (!curso){
        console.error("Curso não encontrado.");
        return;
    }

    let nome = document.querySelector("#editar-titulo").value;
    let imagem = document.querySelector("#editar-img").value;
    let descricao = document.querySelector("#editar-descricao").value;

    curso.nome = nome;
    if(imagem){
        curso.imagem = imagem;
    }
    curso.descricao = descricao;

    let index = cursos.indexOf(curso); 
    cursos[index] = curso;
    
    localStorage.setItem('cursos', JSON.stringify(cursos));
}


export function deletarCurso(id){
    let curso = cursos.find(c => c.id === id);
    if (!curso){
        console.error("Curso não encontrado");
        return;
    }
    console.log(curso);

    let index = cursos.indexOf(curso);
    cursos.splice(index, 1);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

