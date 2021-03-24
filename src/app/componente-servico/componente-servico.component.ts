import { Photo } from './../models/Photo.model';
import { Servico1Service } from './../services/servico1.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente-servico',
  templateUrl: './componente-servico.component.html',
  styleUrls: ['./componente-servico.component.css']
})
export class ComponenteServicoComponent implements OnInit {

  photos:Photo;
  erro:any;
  id:string;

  //Define o route para recebimento do parametro
  constructor(private photoServico:Servico1Service, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    //Recebe o parametro e coloca na variavel
    this.id = this.activatedRoute.snapshot.queryParams["albumId"];
    console.log(this.id);

    this.getter2();
  }

  getter(){
    this.photoServico.getPhotos().subscribe(
      (data:Photo) => {
        this.photos = data;
        console.log('O que retornou em data: ',data);
        console.log('Variavel photos: ',this.photos);
      },
      (error: any) => {
        this.erro = error;
        console.error('Erro: ',this.erro);
      }
    )
  }

  //Metodo que vai exibir as imagens
  getter2(){
    console.log('getter2');
    console.log(this.id);
    this.photoServico.getFotosByAlbum(this.id).subscribe(
      (data: Photo) =>
      {
        this.photos = data;
        console.log('Variavel preenchida:', this.photos)
        console.log('recebido: ', data)
      }, (error: any) =>
      {
        this.erro = error;
        console.error('ERROOO:', error);
      }
    );
  }

}
