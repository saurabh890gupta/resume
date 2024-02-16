import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  myString :string = `I am 5+ years experience in Mean Stack developer I have To work in a pragmatic way
  in an organization where I can show my talent and enhance my skills to meet
  company goals and objective with full integrity and zest`;
}
