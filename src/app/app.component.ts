import { Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mihostlistener';
  constructor(el:ElementRef){
  }
  ngOnInit() {
    (document.querySelector('.cuerpo') as HTMLElement).style.fontSize="30px";
    (document.querySelector('.cuerpo') as HTMLElement).style.backgroundColor="black";
    
    (document.querySelector('.cuerpo') as HTMLElement)
    .addEventListener("click", this.micuerpo);

}
micuerpo(){
alert("cuerpo cliqueado");
}
}