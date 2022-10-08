import { Component, OnInit } from '@angular/core';
import { SiniestroService } from '../../../services/siniestro.service';
import { MatTableDataSource } from '@angular/material/table';
// import swal from 'sweetalert2';
import Swal from 'sweetalert2';
import { Siniestro } from 'src/app/shared/models/siniestro';

@Component({
  selector: 'app-list-siniestro',
  templateUrl: './list-siniestro.component.html',
  styleUrls: ['./list-siniestro.component.scss'],
})
export class ListSiniestroComponent implements OnInit {
  siniestro: Siniestro[] = [];
  errMess!: string;
  public displayedColumns: string[] = [
    'id',
    'fecha',
    'compania',
    'estimacion',
    'tipo',
    'acciones'
  ];
  public dataSource = new MatTableDataSource<Siniestro>();
  constructor(private SiniestroService: SiniestroService) {}

  ngOnInit(): void {
    this.getListSiniestros();
  }
  getListSiniestros() {
    this.SiniestroService.getSiniestros().subscribe(
      (ListSiniestros) => (this.dataSource.data = ListSiniestros),
      (errmess) => (this.errMess = <any>errmess)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  async DeletePersonal(id: string) {
    this.SiniestroService.DeleteSiniestro(+id).subscribe(
      (errmess) => (this.errMess = <any>errmess)
    );
    Swal.fire('Exito!', 'Se elimino los datos exitosamente!', 'success');
    this.ngOnInit();
  }
}
