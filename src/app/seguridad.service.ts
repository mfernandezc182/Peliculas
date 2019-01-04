import {Injectable, EventEmitter} from '@angular/core'
import {Router} from '@angular/router'

@Injectable({
    providedIn: 'root'
})
export class SeguridadService{
    
onCambioEstado = new EventEmitter<boolean>()


constructor(private router: Router){}

login(){
    this.router.navigate(["peliculas"])
    sessionStorage.setItem("usuario", "rfernandez")
    this.onCambioEstado.emit(true)

}

logout(){
    sessionStorage.clear()
    this.router.navigate(["/"])
    this.onCambioEstado.emit(false)
}
estarLogeado(){
   return sessionStorage.getItem("usuario") ? true : false
}
}