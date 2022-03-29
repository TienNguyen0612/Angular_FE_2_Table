import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  submit() {
    const product = this.productForm.value;
    product.category = {
      id: product.category
    };
    this.productService.createProduct(product).subscribe(() => {
      alert('Create Product Successful');
      this.productForm.reset();
    });
  }

  getAllCategories() {
    return this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
