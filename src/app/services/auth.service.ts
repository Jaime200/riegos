import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* CREAR NUEVOS USUARIOS */
  //https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]

  /* LOGIN */
  //https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]

  public  usuarioEmail:string;
  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private apiKey = 'AIzaSyA4AIKQ-SHbwYV0PyP9ZoCBEZ2Oim1XWoQ';
  userToken: string;
  
  constructor( private http:HttpClient) { 
    this.leerToken();
  }

  logout(){
    localStorage.removeItem('logApptoken')
    localStorage.removeItem('logAppemailUser')
  }

  login(usuario:UsuarioModel){
    const outData = {
      ...usuario,
      // email : usuario.email,
      // password: usuario.password,
      returnSecureToken: true,
    }

    return this.http.post(
      `${this.url}/verifyPassword?key=${this.apiKey}`, outData )
      .pipe(
        map(resp=>{
            this.guardarToken(resp['idToken']);
            localStorage.setItem('logAppemailUser', resp['email'])
            this.usuarioEmail = resp['email'];
            return resp;
        })
      );
      
  }

  nuevoUsuario(usuario:UsuarioModel){
    const outData = {
      ...usuario,
      // email : usuario.email,
      // password: usuario.password,
      returnSecureToken: true,

    }
    
    return this.http.post(
      `${this.url}/signupNewUser?key=${this.apiKey}`, outData)
      .pipe(
        map(resp=>{
            this.guardarToken(resp['idToken']);
            return resp;
        })
      );
  }

  private guardarToken(idToken:string){
    this.userToken = idToken;
    localStorage.setItem('logApptoken', idToken)

    let hoy = new Date();
    hoy.setSeconds(3600);
    localStorage.setItem('logAppexpira',hoy.getTime().toString());
  }

  private leerToken(){
    if(localStorage.getItem('logApptoken')){
      this.userToken=localStorage.getItem('logApptoken')
      this.usuarioEmail = localStorage.getItem('logAppemailUser')
    }else{
      this.userToken= '';
    }
    return this.userToken
  }

  public isLogin():boolean {

    const tokenExpiricyDate  =  Number(localStorage.getItem("logAppexpira"));
    let currentDate  =  new Date();
    currentDate.setTime(tokenExpiricyDate);

    return this.userToken.length > 2 && (currentDate > new Date());

  }

}
