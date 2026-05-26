import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import { AlunoService } from '../../services/aluno.service';

import { Disciplina } from '../../models/aluno';

@Component({
  selector: 'app-disciplinas',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './disciplinas.html',

  styleUrl: './disciplinas.css'
})

export class DisciplinasComponent implements OnInit {

  disciplinas: Disciplina[] = [];

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService
  ) {}

  ngOnInit(): void {

    const ra = this.route.snapshot.paramMap.get('ra');

    if (ra) {

      this.alunoService.getDisciplinas(ra).subscribe({

        next: (dados) => {

          this.disciplinas = dados;
        }
      });
    }
  }
}
