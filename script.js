function mudarSecao(secaoId) {
    // Esconde todas as seções
    const secoes = document.querySelectorAll('.secao');
    secoes.forEach(s => s.classList.remove('ativa'));

    // Mostra a seção desejada
    const secaoAlvo = document.getElementById(secaoId);
    if(secaoAlvo) {
        secaoAlvo.classList.add('ativa');
    }

    // Atualiza menu
    const botoes = document.querySelectorAll('.nav-btn');
    botoes.forEach(b => b.classList.remove('ativo-menu'));
    
    // Marca o botão clicado
    event.currentTarget.classList.add('ativo-menu');
}

function mudarTrimestre(materia, tri, btnClicado) {
    const secaoMateria = document.getElementById(materia);
    
    // Esconde todos os conteúdos de trimestre dentro desta matéria
    const conteudos = secaoMateria.querySelectorAll('.conteudo-trimestre');
    conteudos.forEach(c => c.classList.remove('ativo'));

    // Mostra o trimestre desejado
    const triAlvo = document.getElementById(`${materia}-tri${tri}`);
    if(triAlvo) {
        triAlvo.classList.add('ativo');
    }

    // Atualiza visual das abas
    const botoes = secaoMateria.querySelectorAll('.aba-btn');
    botoes.forEach(b => b.classList.remove('ativa'));
    btnClicado.classList.add('ativa');
}