import { Component, OnInit } from '@angular/core';
import { IPeliculas } from '../ipeliculas';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  peliculas : Array<IPeliculas>
  constructor(private peliculaService: PeliculasService) { }

  ngOnInit() {
    this.peliculas = this.peliculaService.listarPeliculas()
  }

}
