import { Injectable } from "@angular/core";

@Injectable({
providedIn:`root`
})
export class empService{
var_one:string;
var_two:string;
var_three:string;

constructor(){
    this.var_one=`Employee Data soon.....`;
    this.var_two=`Products Data soon.....`;
    this.var_three=`Customers Data soon`;
}

};