import { Component, OnInit} from '@angular/core';
import {AllProductService} from "../allproducts/allproduct.service"
import { UserLogin } from '../staticvariable';
import {Product} from '../addproducts/product.model'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-allproducts',
    templateUrl: './allproducts.component.html',
    styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

    constructor() {}

    ngOnInit() {


    }

}
