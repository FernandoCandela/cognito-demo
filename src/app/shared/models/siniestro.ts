import { Bien } from './bien';
export class Siniestro {
  id!: string;
  fecha!: string;
  direccion!: string;
  relato!: string;
  compania!: string;
  estimacion!: number;
  tipo!: string;
  bienes!: Bien[];
  usernameMod!: string;
}
