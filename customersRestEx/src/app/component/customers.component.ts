import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { SpinnerVisibilityService } from "ng-http-loader";
import { Customers } from "../model/customers.model";
import { customersService } from "../service/customers.service";

@Component({
    selector: `customers`,
    templateUrl: `customers.component.html`
})

export class customersComponent {
    data: Customers;

    constructor(private service: customersService,
                private spinner:SpinnerVisibilityService) { }

    ngOnInit() {
        this.spinner.show();
        this.service.getCustomers().subscribe((posRes) => { this.data = posRes;this.spinner.hide();},
            (errorRes: HttpErrorResponse) => { console.log(errorRes); this.spinner.hide(); });
    };
};