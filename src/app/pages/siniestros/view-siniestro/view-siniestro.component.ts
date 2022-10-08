import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SiniestroService } from '../../../services/siniestro.service';
import { switchMap } from 'rxjs/operators';
import { Siniestro } from 'src/app/shared/models/siniestro';


@Component({
  selector: 'app-view-siniestro',
  templateUrl: './view-siniestro.component.html',
  styleUrls: ['./view-siniestro.component.scss']
})
export class ViewSiniestroComponent implements OnInit {
  siniestro!: Siniestro;
  errMess!: string;
  constructor(private siniestroService: SiniestroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.siniestroService.getSiniestro(+params['id']);
     }))
    .subscribe(siniestro => {
      this.siniestro = siniestro;
    },
      errmess => this.errMess = <any>errmess);
  }
}
