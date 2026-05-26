import { Routes } from '@angular/router';

import { AlunosListComponent } from './pages/alunos-list/alunos-list';

import { AlunoDetalheComponent } from './pages/aluno-detalhe/aluno-detalhe';

import { DisciplinasComponent } from './pages/disciplinas/disciplinas';

import { AlunoEditarComponent } from './pages/aluno-editar/aluno-editar';

export const routes: Routes = [

  {
    path: '',
    component: AlunosListComponent
  },

  {
    path: 'aluno/:ra',
    component: AlunoDetalheComponent
  },

  {
    path: 'aluno/:ra/disciplinas',
    component: DisciplinasComponent
  },

  {
    path: 'aluno/:ra/editar',
    component: AlunoEditarComponent
  },

  {
    path: '**',
    redirectTo: ''
  }
];
