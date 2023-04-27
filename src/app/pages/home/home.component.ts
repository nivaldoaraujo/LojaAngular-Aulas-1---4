import { Component, OnInit } from '@angular/core';


//importamos OrderDetailsService
import { OrderDetailsService } from 'src/app/services/order-details.service';

OrderDetailsService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service:OrderDetailsService) {}
  //1 - variavel
  foodData:any;
  
  ngOnInit(): void {
    //1 - valores da losta sendo add na variável foodData
   this.foodData = this.service.foodDatails;
  }
}

//2 ir para a home components