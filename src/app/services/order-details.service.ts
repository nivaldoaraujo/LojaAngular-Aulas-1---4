import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDatails = [
    {
      id:1,
      foodName: "Sanduiche Natural de Frango",
      foodDetails: "Sanduiche Natural de Frango",
      foodPrice: 65,
      foodImg: "https://assets.unileversolutions.com/recipes-v2/99439.jpg"
    },
    {
      id:2,
      foodName: "Sfia de queijo",
      foodDetails: "Sfia de queijo provolone",
      foodPrice: 40,
      foodImg: "https://www.receitasdemae.com.br/wp-content/uploads/2011/04/Esfiha-aberta-de-queijo.jpg"
    },
    {
      id:3,
      foodName: "Suco de laranja",
      foodDetails: "Suco natural de laranja ",
      foodPrice: 35,
      foodImg: "foto1.jpg"
    },
    {
      id:4,
      foodName: "Pastel de queijo",
      foodDetails: "Pastelão de quijo com azeitonas verdes",
      foodPrice: 20,
      foodImg: "https://speedy.uenicdn.com/88e12d52-d77e-415f-855d-e4f579f2ccd6/c584_a/image/upload/v1571391077/service_images/shutterstock_1024844392.jpg"
    }

    
  ]
}
