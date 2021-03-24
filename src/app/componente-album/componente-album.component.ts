import { Album } from './../models/Album.model';
import { Album1Service } from './../services/album1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-album',
  templateUrl: './componente-album.component.html',
  styleUrls: ['./componente-album.component.css']
})
export class ComponenteAlbumComponent implements OnInit {
  albuns:Album;
  erro:any;

  id:string;

  constructor(private albumServico:Album1Service) {
    this.getter();
  }

  ngOnInit(): void {
  }

  getter(){
    this.albumServico.getAlbuns().subscribe(
      (data:Album) => {
        this.albuns = data;
        console.log('o que retornou em data: ', data);
        console.log('Variavel albuns: ',this.albuns);
      },
      (error: any) => {
        this.erro = error;
        console;error('Erro: ',this.erro);
      }
    )
  }

}
