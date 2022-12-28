import { Observable } from 'rxjs';

import { Consulta } from './../../models/consulta';
import { ConsultasServiceService } from './../../services/consultas-service.service';

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  form = this.formBuilder.group({
    nome: [null, [Validators.required,Validators.minLength(3),this.validaNome]],
    data: [null, [Validators.required]],
    hora: [null, [Validators.required]],
    cpf: [null, [Validators.required,Validators.minLength(11),Validators.maxLength(11),this.validaCpf]]

  });


  constructor(
    private cService: ConsultasServiceService,
    private formBuilder: FormBuilder,
    private snack: MatSnackBar,
    private location: Location
  ) {

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
    const regex2=/[^a-zA-Z\u00C0-\u00FF ]+/i

    //se tiver números ou caracteres especiais aponta erro
    if(regex2.test(campo) && campo!='' ){
        return{nomeInvalido:true}

    }


    return null;
  }

  validaCpf(control:AbstractControl){
    let campo=control.value as string;

    const regex=/[A-Za-z]/
    const regex2= /[^a-zA-Z0-9]+/g;//especiais e espaço


    if(regex.test(campo) || regex2.test(campo)  ){
      if (campo!=='') {
        return {cpfInvalido:true}

      }
    }
    return null

  }

  onSubmit() {
    this.cService.save(this.form.value)
      .subscribe(succes => { this.succesSnack('Cadastrado com sucesso', 'Fechar'); this.form.reset() }, fail => this.failSnack('Houve uma falha ao cadastrar: ', 'Fechar'));

  }
  onCancel() {
    this.location.back()

  }

  succesSnack(msg: string, action: string) {

    this.snack.open(msg, action, { duration: 3000, panelClass: 'succes' });


  }
  failSnack(msg: string, action: string) {

    this.snack.open(msg, action, { duration: 3000, panelClass: 'fail' });


  }


}
