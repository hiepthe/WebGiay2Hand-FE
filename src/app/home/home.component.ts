import { Component, OnInit} from '@angular/core';
import {AllProductService} from "../allproducts/allproduct.service"
import { UserLogin } from '../staticvariable';
import {Product} from '../addproducts/product.model'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() {}

    ngOnInit() {


    }

}
