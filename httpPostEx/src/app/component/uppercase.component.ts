import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { UppercaseService } from '../service/uppercase.service';

@Component({
  selector: 'uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css']
})
export class UppercaseComponent{
  result: any;
  my_msg:any;

  constructor(private service: UppercaseService,
    private spinner: SpinnerVisibilityService) { }


    clickMe(arg1: any): any {
    this.spinner.show();
    this.service.convertToUppercase({ "message": arg1 }).subscribe((posRes) => { this.result = posRes; this.spinner.hide(); }, (errRes: HttpErrorResponse) => { console.log(errRes); this.spinner.hide(); });
  };

}
