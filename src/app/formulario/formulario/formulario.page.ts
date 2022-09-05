
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NumberValueAccessor, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  cliente = {}
  clienteForm : FormGroup

  constructor(private formBuilder : FormBuilder) { }

  enviar() {
    if (this.clienteForm.invalid || this.clienteForm.pending){
      return
  }else{
    console.log(this.cliente)
  }
}

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      tel: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(50)])]
    })
  }

}
