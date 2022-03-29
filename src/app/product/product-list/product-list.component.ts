import {Component, OnInit} from '@angular/core';
import { Category } from 'src/app/model/category';
import {Product} from 'src/app/model/product';
import { CategoryService } from 'src/app/service/category.service';
import {ProductService} from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  // categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
    // this.getAllCategories();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: number, name: string) {
    if (confirm('Are you sure you want to delete product: ' + name + '?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        alert('Delete product successfully');
        this.getAllProducts();
      })
    }
  }

  // getAllCategories() {
  //   this.categoryService.getAllCategories().subscribe(categories => {
  //     this.categories = categories;
  //   });
  // }

}
