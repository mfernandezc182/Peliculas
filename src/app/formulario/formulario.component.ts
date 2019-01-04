import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { IPeliculas } from '../ipeliculas';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private peliculaService: PeliculasService) { }
  
  ngOnInit() {
  }

  imagen: string
  agregarPelicula(titulo:string, director:string, anio:number){

    const pelicula : IPeliculas = {
      titulo, director, anio, afiche:this.imagen, visualizar:false
    }
    this.peliculaService.agregarPelicula(pelicula)
    this.imagen = undefined
  }

  seleccionarImagen(evt) {
		//console.log(evt.target.files[0])

		const fs: FileReader = new FileReader()
		fs.onloadend = (resultado) => {
			this.imagen = (resultado.currentTarget as FileReader).result as string

			//console.log(resultado.currentTarget)
		}

		fs.readAsDataURL(evt.target.files[0])

	}

}
