import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SummaryComponent } from './summary/summary.component';
import { ExperienceComponent } from './experience/experience.component';
import { TechnologyComponent } from './technology/technology.component';
import { EducationComponent } from './education/education.component';
import { SoftwareComponent } from './software/software.component';
import { CertificateComponent } from './certificate/certificate.component';
import { FooterComponent } from './footer/footer.component';
import { LessonModalComponent } from './lesson-modal/lesson-modal.component';

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,SummaryComponent,
    ExperienceComponent,TechnologyComponent,EducationComponent,
    SoftwareComponent,CertificateComponent,FooterComponent,LessonModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

}
