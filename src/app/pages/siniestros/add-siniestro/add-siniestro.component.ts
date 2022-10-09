import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { SiniestroService } from '../../../services/siniestro.service';
import swal from 'sweetalert2';
import { Siniestro } from 'src/app/shared/models/siniestro';

@Component({
  selector: 'app-add-siniestro',
  templateUrl: './add-siniestro.component.html',
  styleUrls: ['./add-siniestro.component.scss'],
})
export class AddSiniestroComponent implements OnInit {
  siniestro!: Siniestro;
  errMess!: string;

  siniestroForm!: UntypedFormGroup;
  savedsiniestro!: Siniestro;

  formErrors: { [char: string]: string } = {
    fecha: '',
    direccion: '',
    relato: '',
    compania: '',
    estimacion: '',
    tipo: '',
  };

  validationMessages = {
    direccion: {
      required: 'Direccion is required.',
    },
    relato: {
      required: 'Relato is required.',
    },
    compania: {
      required: 'Compania is required.',
    },
    estimacion: {
      required: 'Estimacion is required.',
      pattern: 'Estimacion must contain only numbers.',
    },
  };

  constructor(
    private siniestroservice: SiniestroService,
    private cm: UntypedFormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {}
  createForm() {
    this.siniestroForm = this.cm.group({
      fecha: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      relato: ['', [Validators.required]],
      compania: ['', [Validators.required]],
      estimacion: ['', [Validators.required, Validators.pattern]],
      tipo: ['', [Validators.required]],
    });

    this.siniestroForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged();
    this.getListSiniestros();
  }
  onValueChanged(data?: any) {
    if (!this.siniestroForm) {
      return;
    }
    const form = this.siniestroForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = (this.validationMessages as any)[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  siniestrosList: Siniestro[] = [];
  getListSiniestros() {
    this.siniestroservice.getSiniestros()
    .subscribe((siniestro) => {
      this.siniestrosList = siniestro;
    },
    (errmess) => (this.errMess = <any>errmess));
  }

  getLastId() {
    console.log(this.siniestrosList);
    return Number(this.siniestrosList.pop()?.id) + 1;
  }

  onSubmit() {
    this.siniestro = this.siniestroForm.value;
    this.siniestro.id = this.getLastId().toString();
    this.siniestroservice.PushSiniestro(this.siniestro).subscribe(
      (siniestro) => {
        this.savedsiniestro = siniestro;
      },
      (errmess) => {
        this.siniestro == null;
        this.errMess = <any>errmess;
      }
    );
    console.log(this.siniestro);
    this.siniestroForm.reset({
      fecha: '',
      direccion: '',
      relato: '',
      compania: '',
      estimacion: '',
      tipo: '',
    });
    swal
      .fire({
        title: 'Exito!',
        text: 'Se registro el siniestro correctamente!',
        icon: 'success',
        timerProgressBar: true,
        timer: 1500,
      })
      .then((result) => {
        this.router.navigate(['/list']);
      });
  }
}
