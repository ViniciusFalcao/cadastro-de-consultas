import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  consultas:any[]=[
    {id:1,nome:'Vinicius Canuto Falcão',data:'2/11/2022',hora:'13:30',cpf:'6678686432'},
    {id:2,nome:'Vinicius Canuto Falcão',data:'2/11/2022',hora:'13:40',cpf:'6678686432'},
    {id:3,nome:'Vinicius Canuto Falcão',data:'2/11/2022',hora:'13:50',cpf:'6678686432'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
