// crud.js
const data = require('./Data');

function addTurno(nome, inicio, termino) {
  const id = data.turnos.length + 1;
  data.turnos.push({ id, nome, inicio, termino });
}

function listTurnos() {
  return data.turnos;
}

// Funções CRUD para Curso
function addCurso(nome, horas_totais, id_turno) {
  const id = data.cursos.length + 1;
  data.cursos.push({ id, nome, horas_totais, id_turno });
}

function listCursos() {
  return data.cursos;
}

// Funções CRUD para Matéria
function addMateria(nome, horas_totais, id_curso) {
  const id = data.materias.length + 1;
  data.materias.push({ id, nome, horas_totais, id_curso });
}

function listMaterias() {
  return data.materias;
}

// Funções CRUD para Aluno
function addAluno(nome, id_curso) {
  const id = data.alunos.length + 1;
  data.alunos.push({ id, nome, id_curso });
}

function listAlunos() {
  return data.alunos;
}

// Funções CRUD para Professor
function addProfessor(nome) {
  const id = data.professores.length + 1;
  data.professores.push({ id, nome });
}

function listProfessores() {
  return data.professores;
}

// Funções CRUD para Sala
function addSala(numero) {
  const id = data.salas.length + 1;
  data.salas.push({ id, numero });
}

function listSalas() {
  return data.salas;
}

// Funções CRUD para Aula
function addAula(id_professor, id_materia, id_sala) {
  const id = data.aulas.length + 1;
  data.aulas.push({ id, id_professor, id_materia, id_sala });
}

function listAulas() {
  return data.aulas;
}

// Funções CRUD para Aluno_Aula
function addAlunoAula(id_aula, id_aluno) {
  const id = data.alunoAulas.length + 1;
  data.alunoAulas.push({ id, id_aula, id_aluno });
}

function listAlunoAulas() {
  return data.alunoAulas;
}

module.exports = {
  addTurno, listTurnos,
  addCurso, listCursos,
  addMateria, listMaterias,
  addAluno, listAlunos,
  addProfessor, listProfessores,
  addSala, listSalas,
  addAula, listAulas,
  addAlunoAula, listAlunoAulas
};
