document.addEventListener('DOMContentLoaded', () => {
    // Array com suas habilidades
    const skills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Python",
        "React",
        "SQL",
        "Git",
        "Inglês Avançado",
        "Comunicação",
        "Trabalho em Equipe"
    ];

    const skillsList = document.getElementById('skills-list');

    // Adiciona cada habilidade como um item de lista
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Você pode adicionar outras interatividades aqui, como botões ou animações.
    console.log("Página de currículo carregada com sucesso!");
});