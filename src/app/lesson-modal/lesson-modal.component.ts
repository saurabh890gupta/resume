import { Component ,ChangeDetectorRef,OnChanges} from '@angular/core';
import { DatePipe } from '@angular/common';
// import * as $ from "jquery";
// import * as $ from 'jquery';
// declare var $: JQueryStatic;
// declare var $ : any;

declare var $: any;

@Component({
  selector: 'app-lesson-modal',
  standalone: true,
  imports: [],
  templateUrl: './lesson-modal.component.html',
  styleUrl: './lesson-modal.component.scss',
  providers: [DatePipe]
})
export class LessonModalComponent {
  currentDateAndTime:any
  constructor(private datePipe: DatePipe) {
    this.currentDateAndTime = this.datePipe.transform(new Date(), 'MMMM d, y');
  }
  public ngOnInit() {
    this.modalPopup()
   console.log("this.currentDateAndTimethis.currentDateAndTime",this.currentDateAndTime)
  }


  dowloadCover(){
    const link = document.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', '../../assets/saurabh coverPage.jpg');
  link.setAttribute('download', `saurabh coverPage.jpg`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  }

  modalPopup() {
    $('#exampleModalScrollable').modal('show');
  }
}
