import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../models/aluno';

@Component({
  selector: 'app-alunos-list',

  standalone: true,

  imports: [CommonModule, RouterModule],

  templateUrl: './alunos-list.html',

  styleUrl: './alunos-list.css'
})

export class AlunosListComponent implements OnInit {

  alunos: Aluno[] = [];

  carregando = true;

  erro = '';

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos() {

    this.alunoService.getAlunos().subscribe({

      next: (dados) => {

        this.alunos = dados;

        this.carregando = false;
      },

      error: () => {

        this.erro = 'Erro ao carregar alunos';

        this.carregando = false;
      }
    });
  }
}
