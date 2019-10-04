import { Injectable } from '@angular/core';
import { concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }


  
  
  ArabictoRoman(numero: number){
    var numeros:number[];
    numeros = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
  
    var romanos:string[];
    romanos = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
    let resultado = '';
    let i = 0;
    if(numero > 1000 || numero == 0){
      resultado = 'numero invalido';
      return(resultado)
    }
    else{
      while(i < numeros.length){
        if(numero == numeros[i]){
          resultado = resultado + romanos[i]
          return resultado
        }
        else{
          if(numero < numeros[i]){
            resultado = resultado + romanos[i-1]
            numero = numero - numeros[i-1]
            i=0
          }
          else{
            i = i +1
          }
        }
      }
    }
    return resultado
  
  }
  
}

