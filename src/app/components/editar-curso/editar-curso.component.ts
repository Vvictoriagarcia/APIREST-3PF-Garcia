import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Profesor } from 'src/app/models/profesor';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css'],
})
export class EditarCursoComponent implements OnInit {
  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]>;

  constructor(
    private cursoService: CursosService,
    private router: Router,
    private dialogRef: MatDialogRef<EditarCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public curso: Curso
  ) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl(this.curso.id),
      nombre: new FormControl(this.curso.nombre),
      profesor: new FormControl(this.curso.profesor),
      inscripcionAbierta: new FormControl(this.curso.inscripcionAbierta),
      img: new FormControl(this.curso.img),
    });
  }

  editarCurso() {
    let curso: Curso = {
      id: this.curso.id,
      nombre: this.formulario.value.nombre,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor: this.formulario.value.profesor,
      img: this.formulario.value.img,
    };

    this.cursoService.editarCurso(curso).subscribe((curso: Curso) => {
      this.dialogRef.close(curso);
    });
  }
}
