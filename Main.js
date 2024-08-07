// main.js
const prompt = require('prompt-sync')();
const crud = require('./Crud');

function main() {
  while (true) {
    console.log('\nSistema de Gerenciamento Escolar');
    console.log('1. Adicionar Turno');
    console.log('2. Listar Turnos');
    console.log('3. Adicionar Curso');
    console.log('4. Listar Cursos');
    console.log('5. Adicionar Matéria');
    console.log('6. Listar Matérias');
    console.log('7. Adicionar Aluno');
    console.log('8. Listar Alunos');
    console.log('9. Adicionar Professor');
    console.log('10. Listar Professores');
    console.log('11. Adicionar Sala');
    console.log('12. Listar Salas');
    console.log('13. Adicionar Aula');
    console.log('14. Listar Aulas');
    console.log('15. Adicionar Aluno a Aula');
    console.log('16. Listar Alunos em Aulas');
    console.log('0. Sair');
    const choice = prompt('Escolha uma opção: ');

    switch (choice) {
      case '1':
        const nomeTurno = prompt('Nome do turno: ');
        const inicio = prompt('Início do turno: ');
        const termino = prompt('Término do turno: ');
        crud.addTurno(nomeTurno, inicio, termino);
        break;
      case '2':
        console.log(crud.listTurnos());
        break;
      case '3':
        const nomeCurso = prompt('Nome do curso: ');
        const horasTotaisCurso = prompt('Horas totais do curso: ');
        const idTurnoCurso = prompt('ID do turno do curso: ');
        crud.addCurso(nomeCurso, horasTotaisCurso, idTurnoCurso);
        break;
      case '4':
        console.log(crud.listCursos());
        break;
      case '5':
        const nomeMateria = prompt('Nome da matéria: ');
        const horasTotaisMateria = prompt('Horas totais da matéria: ');
        const idCursoMateria = prompt('ID do curso da matéria: ');
        crud.addMateria(nomeMateria, horasTotaisMateria, idCursoMateria);
        break;
      case '6':
        console.log(crud.listMaterias());
        break;
      case '7':
        const nomeAluno = prompt('Nome do aluno: ');
        const idCursoAluno = prompt('ID do curso do aluno: ');
        crud.addAluno(nomeAluno, idCursoAluno);
        break;
      case '8':
        console.log(crud.listAlunos());
        break;
      case '9':
        const nomeProfessor = prompt('Nome do professor: ');
        crud.addProfessor(nomeProfessor);
        break;
      case '10':
        console.log(crud.listProfessores());
        break;
      case '11':
        const numeroSala = prompt('Número da sala: ');
        crud.addSala(numeroSala);
        break;
      case '12':
        console.log(crud.listSalas());
        break;
      case '13':
        const idProfessorAula = prompt('ID do professor: ');
        const idMateriaAula = prompt('ID da matéria: ');
        const idSalaAula = prompt('ID da sala: ');
        crud.addAula(idProfessorAula, idMateriaAula, idSalaAula);
        break;
      case '14':
        console.log(crud.listAulas());
        break;
      case '15':
        const idAula = prompt('ID da aula: ');
        const idAluno = prompt('ID do aluno: ');
        crud.addAlunoAula(idAula, idAluno);
        break;
      case '16':
        console.log(crud.listAlunoAulas());
        break;
      case '0':
        return;
      default:
        console.log('Opção inválida.');
    }
  }
}

main();
