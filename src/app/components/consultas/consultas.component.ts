import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Consulta } from './../../models/consulta';
import { Component, OnInit } from '@angular/core';
import { ConsultasServiceService } from 'src/app/services/consultas-service.service';
import { concatMap, filter, map, Observable } from 'rxjs';


@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  busca: string = ''

  consultas: Observable<Consulta[]>;
  consultaFiltro: Observable<Consulta[]>;

  constructor(private cService: ConsultasServiceService, private snack: MatSnackBar, private location: Location) {
    this.consultas = this.cService.list();
    this.consultaFiltro = this.consultas;

  }

  ngOnInit(): void {

  }
  reset() {
    this.consultaFiltro = this.consultas;
  }
  buscaCadastro(query: string) {
    if (query == '') {
      this.consultaFiltro = this.consultas;

    } else {
      this.consultaFiltro = this.consultas.pipe(map(c => c.filter(c => c.nome.toLowerCase().includes(query.toLowerCase()))));

    }


  }
  cancelConsulta(id: number) {
      this.cService.deleteId(id)
        .pipe(
          map(() => this.cService.list())
        )
        .subscribe(consultas => {
          this.consultas = consultas;
          this.consultaFiltro = consultas;
          this.succesSnack('Consulta cancelada com sucesso', 'Fechar')

        },()=>this.failSnack('Falha ao cancelar consulta', 'Fechar'));
  }

  succesSnack(msg: string, action: string) {

    this.snack.open(msg, action, { duration: 3000, panelClass: 'succes' });


  }
  failSnack(msg: string, action: string) {

    this.snack.open(msg, action, { duration: 3000, panelClass: 'fail' });


  }


}
