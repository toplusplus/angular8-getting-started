import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService, 
    private formBuilder: FormBuilder,
    private router: Router
  ) {    
    this.checkoutForm = this.formBuilder.group(
      {
        name: '',
        address: ''
      }
    );

  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    window.alert('Hi ' + customerData.name + '! Your order has been submmitted!!!');
    
    this.router.navigateByUrl('');
  }

  ngOnInit() {    
    this.items = this.cartService.getItems();    
  }

}