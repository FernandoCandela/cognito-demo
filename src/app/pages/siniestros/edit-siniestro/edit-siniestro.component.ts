import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { SiniestroService } from '../../../services/siniestro.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import swal from 'sweetalert2';
import { Siniestro } from 'src/app/shared/models/siniestro';

@Component({
  selector: 'app-edit-siniestro',
  templateUrl: './edit-siniestro.component.html',
  styleUrls: ['./edit-siniestro.component.scss'],
})
export class EditSiniestroComponent implements OnInit {
  siniestro!: Siniestro;
  siniestroCopy!: Siniestro;
  errMess!: string;
  dataLoader: boolean = false;

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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.siniestroservice.getSiniestro(+params['id']);
        })
      )
      .subscribe(
        (siniestro) => {
          this.siniestro = siniestro;
          this.siniestroCopy = siniestro;
          this.createForm();
        },
        (errmess) => (this.errMess = <any>errmess)
      );
  }

  createForm() {
    this.siniestroForm = this.cm.group({
      fecha: [this.siniestro.fecha, [Validators.required]],
      direccion: [this.siniestro.direccion, [Validators.required]],
      relato: [this.siniestro.relato, [Validators.required]],
      compania: [this.siniestro.compania, [Validators.required]],
      estimacion: [
        this.siniestro.estimacion,
        [Validators.required, Validators.pattern],
      ],
      tipo: [this.siniestro.tipo, [Validators.required]],
    });

    this.siniestroForm.valueChanges.subscribe((data) =>
      this.onValueChanged(data)
    );

    this.onValueChanged();
    this.dataLoader = true;
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
  onSubmit() {
    this.siniestro = this.siniestroForm.value;
    this.siniestro.id = this.siniestroCopy.id;
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
    swal
      .fire({
        title: 'Exito!',
        text: 'Se actualizo el siniestro correctamente!',
        icon: 'success',
        timerProgressBar: true,
        timer: 1500,
      })
      .then((result) => {
        this.router.navigate(['/list']);
      });
  }
}
