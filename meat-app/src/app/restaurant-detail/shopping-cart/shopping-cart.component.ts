import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  itens(): any {
    return this.shoppingCartService.itens;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  clear() {
    this.shoppingCartService.clear()
  }

  removeItem(item: CartItem) {
    this.shoppingCartService.removeItem(item)
  }


  addItem(item: MenuItem) {
    this.shoppingCartService.addItem(item)
  }


}
