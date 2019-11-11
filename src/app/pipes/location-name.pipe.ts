import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; 

@Pipe({
  name: 'locationName'
})
export class LocationNamePipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }  

  transform(value: string, args?: any): any {
    let words = value.split(',');
    let name = '';
    for(let i =0; i<words.length; i++) {
      if(i==0) {
        name  = `${name}<div style="font-weight: bold; font-size: 30px;">${words[i]}</div>`;
      }
      else {
        name  = `${name}<div>${words[i]}</div>`;
      } 
    }
    name = `<div class="name-box">${name}</div>`
    return this._sanitizer.bypassSecurityTrustHtml(name); 
  }

}
