document.addEventListener('DOMContentLoaded', () => {
    // Array com suas habilidades e cursos
    const skillsAndCourses = [
        "Curso de Mecânica Básica",
        "Inspetor de Qualidade",
        "Auxiliar Administrativo",
        // Adicione outras habilidades que você tenha, como "Pacote Office", "Comunicação", etc.
    ];

    const skillsList = document.getElementById('skills-list');

    // Adiciona cada item como uma tag na seção de habilidades
    skillsAndCourses.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        skillsList.appendChild(li);
    });

    console.log("Página de currículo de primeiro emprego carregada com sucesso!");
});