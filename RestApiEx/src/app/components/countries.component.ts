import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import { Country } from "../model/countries.model";
import { countriesService } from "../services/countries.service";

@Component({
    selector : "countries",
    templateUrl:"./countries.component.html"
})
export class countriesComponent{
    public data:any;
    constructor(private service:countriesService){}

    ngOnInit(){
        this.service.getCountries().subscribe((posRes)=>{
            this.data = posRes;
        },(errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    };
};