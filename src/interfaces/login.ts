export interface LoginBody {
  dni: string;
  email: string;
  password: string;
}
export interface LoginSuccess {
  usuario: Usuario;
  access_token: string;
}
export interface Usuario {
  id: number;
  nombre: string;
  rol: string;
  tyc_aceptado_el: Date;
}
