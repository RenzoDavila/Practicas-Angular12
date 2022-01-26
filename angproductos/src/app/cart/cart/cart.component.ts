import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    window.alert(
      'La orden para ' +
        this.checkoutForm.value.name +
        ' ha sido enviada a ' +
        this.checkoutForm.value.address
    );
    console.warn('Su orden ha sido enviada', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
