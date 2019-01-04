import { IPeliculas } from './ipeliculas';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn : "root"
})
export class PeliculasService{

    private peliculas: IPeliculas[] = []

    constructor(){

    }
    agregarPelicula(pelicula: IPeliculas){
        this.peliculas.push(pelicula)
    }
    listarPeliculas(){
        return this.peliculas
    }

}
