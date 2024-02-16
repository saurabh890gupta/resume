import { Component } from '@angular/core';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
constructor(){

}
downloadFile(){
  const link = document.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', '../../assets/saurabh resume.pdf');
  link.setAttribute('download', `saurabh resume.pdf`);
  document.body.appendChild(link);
  link.click();
  link.remove();
}
}
