import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Consulta } from './../../models/consulta';
import { FormBuilder, FormGroup, AbstractControl,Validators } from '@angular/forms';
import { ConsultasServiceService } from './../../services/consultas-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-remarcar',
  templateUrl: './remarcar.component.html',
  styleUrls: ['./remarcar.component.css']
})
export class RemarcarComponent implements OnInit {
  form = this.formBuilder.group({
    id: [0],
    nome: ['',[Validators.required,this.validaNome]],
    data: [''],
    hora: [''],
    cpf: ['',[this.validaCpf,Validators.required]],
  })

  consulta!: Consulta


  constructor(
    private route: ActivatedRoute,
    private cService: ConsultasServiceService,
    private formBuilder: FormBuilder,
    private location: Location,
    private snack:MatSnackBar
  ) {
    const id = this.route.snapshot.paramMap.get("id")
    this.cService.findId(Number(id)).subscribe((res) => {
      this.consulta = res;




      this.form.setValue(
        {
          id: this.consulta.id,
          nome: this.consulta.nome,
          data: this.consulta.data,
          hora: this.consulta.hora,
          cpf: this.consulta.cpf
        }

      )


    }, fail => console.log(fail))

  }

  ngOnInit(): void {


  }
  getNome() {
    return this.form.get('nome')!;
  }
  getData() {
    return this.form.get('data')!;
  }

  getHora() {
    return this.form.get('hora')!;
  }
  getCpf() {
    return this.form.get('cpf')!
  }

  validaNome(control: AbstractControl) {
    let campo = control.value as string;
    const regex = /[0-9]/;
    const regex2=/[^a-zA-Z 0-9]+/g
    //se tiver números ou caracteres especiais aponta erro
    if(regex2.test(campo)||regex.test(campo) && campo!='' ){
      return{nomeInvalido:true}
    }


    return null;
  }

  validaCpf(control:AbstractControl){
    let campo=control.value as string;

    const regex=/[A-Za-z]/
    const regex2= /[^a-zA-Z0-9]+/g;//especiais e espaço


    if(regex.test(campo) || regex2.test(campo)){
      if (campo!='') {
        return {cpfInvalido:true}

      }
    }
    return null

  }
  validaData(control:AbstractControl){
    let campo=control.value

    const regex=/[A-Za-z] /;
    if (regex.test(campo)) {
      return {dataInvalida:true}

    }
    return null

  }

  validaHora(control:AbstractControl){
    let campo=control.value

    const regex=/[A-Za-z] /;
    if (regex.test(campo)) {
      return {dataInvalida:true}

    }
    return null

  }


  onCancel() {
    this.location.back()

  }
  onSubmit() {
    return this.cService.put(this.form.value)
      .subscribe((succes) => {this.succesSnack('Remarcado com sucesso','Fechar');this.form.reset();setTimeout(()=>this.location.back(),3000)}, fail => this.failSnack('Falha ao cadastrar','Fechar'))

  }


  succesSnack(msg: string, action: string) {

    this.snack.open(msg, action, { duration: 3000, panelClass: 'succes' });


  }
  failSnack(msg: string, action: string) {

    this.snack.open(msg, action, { duration: 3000, panelClass: 'fail' });


  }


}
