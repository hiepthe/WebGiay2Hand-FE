import { Component, OnInit} from '@angular/core';
import {SearchIngreByNameService} from "../searchingredients/searchingredients.service"
import { UserLogin } from '../staticvariable';
import {IngredientDetails} from '../searchingredients/searchingredients.model'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-searchingredients',
    templateUrl: './searchingredients.component.html',
    styleUrls: ['./searchingredients.component.css']
})
export class SearchIngreByNameComponent implements OnInit {

    constructor() {}

    ngOnInit() {

      }

}
