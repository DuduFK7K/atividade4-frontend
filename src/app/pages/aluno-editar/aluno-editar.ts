import {
  Component,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-aluno-editar',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './aluno-editar.html',

  styleUrl: './aluno-editar.css'
})

export class AlunoEditarComponent
implements OnInit {

  aluno: any = {

    ra: '',

    nome: '',

    disciplinas: []
  };

  mensagem = '';

  editando = false;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService
  ) {}

  ngOnInit(): void {

    const ra =
      this.route.snapshot.paramMap.get('ra');

    if (ra) {

      this.alunoService
        .getAlunoByRa(ra)
        .subscribe({

          next: (res) => {

            this.aluno = res;
          }
        });
    }
  }

  habilitarEdicao() {

    this.editando = true;
  }

  salvar() {

    this.alunoService
      .updateAluno(
        this.aluno.ra,
        this.aluno
      )
      .subscribe({

        next: () => {

          this.mensagem =
            'Aluno atualizado com sucesso!';

          this.editando = false;
        },

        error: () => {

          this.mensagem =
            'API não permitiu atualização.';
        }
      });
  }
}
