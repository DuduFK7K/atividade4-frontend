import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  ActivatedRoute,
  RouterModule
} from '@angular/router';

import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-aluno-detalhe',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './aluno-detalhe.html',

  styleUrl: './aluno-detalhe.css'
})

export class AlunoDetalheComponent
implements OnInit {

  aluno: any = null;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService,
    private cdr: ChangeDetectorRef
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

            this.cdr.detectChanges();
          },

          error: (err) => {

            console.log(err);
          }
        });
    }
  }
}
