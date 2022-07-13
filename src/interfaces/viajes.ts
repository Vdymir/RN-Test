export interface Viajes {
  id: number;
  codigo: number;
  estado: ViajeEstado;
  marca: Marca;
  transportista_id: number;
  localidad_origen_id: number;
  localidad_destino_id: number;
  planificado_el: Date;
  despachado_el: Date;
  iniciado_el: null;
  finalizado_el: null;
  ultima_geolocalizacion: null;
  ultima_geolocalizacion_el: null;
  distancia_ultimo_recalculo: number;
  distancia_recorrida: number;
  distancia: number;
  duracion: number;
  rotacion: number;
  entregas: Entregas[];
  localidadOrigen: Localidad;
  localidadDestino: Localidad;
  tollers: Toller[];
}

export interface Entregas {
  fecha_despacho: FechaDespacho;
  id: number;
  transporte_id: number;
  codigo: number;
  estado: EntregasEstado;
  etapa: number;
  toller_id: number;
  numero_remito: string;
  numero_pedido: string;
  tipo_pedido: null;
  grupo_venta: number;
  numero_solicitante: number;
  cliente_id: number;
  distribuidor_id: number;
  destinatario_id: number;
  geolocalizacion: Geolocalizacion | null;
  geolocalizacion_real: null;
  despacho_estimado_el: Date | null;
  entrega_estimada_el: Date | null;
  entregado_el: null;
  tiene_remitos: number;
  motivo_sin_remito: null;
  motivo_rechazo: null;
  distancia: number;
  distancia_gmaps: number;
  duracion: number;
  duracion_gmaps: number;
  contabilizado_el: Date;
  avisado_el: null;
  creado_el: Date;
  modificado_el: Date;
  cliente: Cliente;
  distribuidor: Distribuidor;
  destinatario: Destinatario;
  detalle: Detalle[];
}

export interface Cliente {
  id: number;
  codigo: number;
  nombre: ClienteNombre;
  creado_el: Date;
  modificado_el: Date;
}

export enum ClienteNombre {
  Cliente329 = 'Cliente 329',
}

export interface Destinatario {
  geolocalizacion: null;
  id: number;
  codigo: number;
  nombre: string;
  distribuidor_id: number;
  direccion: DestinatarioDireccion;
  localidad_id: number;
  creado_el: Date;
  modificado_el: Date;
  eliminado_el: null;
  localidad: Localidad;
}

export enum DestinatarioDireccion {
  PresidenteRoca200PEREZMILLANRAMALLO = 'Presidente Roca 200 PEREZ MILLAN - RAMALLO',
  PresidenteRoca200VILLARAMALLO = 'Presidente Roca 200 VILLA RAMALLO',
  SANMartin100VILLARAMALLO = 'San Martin 100 VILLA RAMALLO',
}

export interface Localidad {
  id: number;
  nombre: LocalidadDestinoNombre;
  provincia: Provincia;
  codigo_postal: string;
  geolocalizacion: Geolocalizacion | null;
  creado_el: Date | CreadoElEnum;
  modificado_el: Date | CreadoElEnum;
}

export enum CreadoElEnum {
  The00000000000000 = '0000-00-00 00:00:00',
}

export interface Geolocalizacion {
  lat: number;
  lng: number;
}

export enum LocalidadDestinoNombre {
  PerezMillanRamallo = 'PEREZ MILLAN - RAMALLO',
  VenadoTuerto = 'Venado Tuerto',
  VillaRamallo = 'VILLA RAMALLO',
}

export enum Provincia {
  BuenosAires = 'BUENOS AIRES',
  SantaFe = 'SANTA FE',
}

export interface Detalle {
  id: number;
  entrega_id: number;
  material_codigo: string;
  material_descripcion: Material;
  material_cultivo: Material;
  cantidad: number;
  lote: string;
  placa: null | string;
  creado_el: Date;
  modificado_el: Date;
}

export enum Material {
  Maiz = 'maiz',
}

export interface Distribuidor {
  id: number;
  codigo: number;
  nombre: string;
  marca: Marca;
  comercial_id: number | null;
  creado_el: Date;
  modificado_el: Date;
}

export enum Marca {
  Nd = 'ND',
}

export enum EntregasEstado {
  Pendiente = 'pendiente',
}

export enum FechaDespacho {
  The05052022 = '05/05/2022',
  The06022022 = '06/02/2022',
  The06052022 = '06/05/2022',
  The30052022 = '30/05/2022',
}

export enum ViajeEstado {
  Despachado = 'despachado',
}

export interface Toller {
  geolocalizacion: Geolocalizacion;
  id: number;
  codigo: Codigo;
  nombre: TollerNombre;
  direccion: TollerDireccion;
  localidad_id: number;
  creado_el: Date;
  modificado_el: Date;
}

export enum Codigo {
  Ar09 = 'AR09',
}

export enum TollerDireccion {
  Avellaneda1345VenadoTuerto = 'Avellaneda 1345 - Venado Tuerto',
}

export enum TollerNombre {
  GalponesComerc = 'Galpones Comerc.',
}
