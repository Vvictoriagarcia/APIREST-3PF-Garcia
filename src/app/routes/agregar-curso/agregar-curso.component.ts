import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Profesor } from 'src/app/models/profesor';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css'],
})
export class AgregarCursoComponent implements OnInit {
  formulario!: FormGroup;
  profesores$!: Observable<Profesor[]>;

  constructor(private router: Router, private cursoService: CursosService) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      id: new FormControl('', Validators.required),
      inscripcionAbierta: new FormControl(false, Validators.required),
      nombre: new FormControl('', Validators.required),
      profesor: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
    });
  }

  agregarCurso() {
    let curso: Curso = {
      id: this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      inscripcionAbierta: this.formulario.value.inscripcionAbierta,
      profesor: this.formulario.value.profesor,
      img: this.formulario.value.img,
    };
    this.cursoService.agregarCurso(curso).subscribe((curso: Curso) => {
      alert(`${curso.nombre} agregado satisfactoriamente`);
      this.router.navigate(['cursos/listar']);
    });
  }
}
