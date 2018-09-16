import { Component, OnInit } from '@angular/core';
import { UserService } from '../../share/services/user.service';
import { User } from '../../share/models/user.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.showMessage();
  }

}
