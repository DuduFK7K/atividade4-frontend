import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})

export class AlunoService {

  private apiUrl = '/api/alunos';

  constructor(
    private http: HttpClient
  ) {}

  getAlunos(): Observable<Aluno[]> {

    return this.http.get<Aluno[]>(
      this.apiUrl
    );
  }

  getAlunoByRa(
    ra: string
  ): Observable<Aluno> {

    return this.http.get<Aluno>(
      `${this.apiUrl}/${ra}`
    );
  }

  getDisciplinas(
    ra: string
  ) {

    return this.http.get<any[]>(
      `${this.apiUrl}/${ra}/disciplinas`
    );
  }

  updateAluno(
    ra: string,
    aluno: Aluno
  ) {

    return this.http.put(
      `${this.apiUrl}/${ra}`,
      aluno
    );
  }
}
