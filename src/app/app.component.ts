import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: []
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'painel-app';
  
  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService) { } // {2}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
}



