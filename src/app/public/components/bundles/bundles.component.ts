import {Component, OnInit} from '@angular/core';
import {BundleService} from "../../../shared/services/bundle.service";
import {Bundle} from "../../../models/bundle";
import {ProductService} from "../../../shared/services/product.service";
import {Product} from "../../../models/product";

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.css']
})
export class BundlesComponent implements OnInit{

  bundles:Bundle[]=[]
  products:Product[]=[]
  constructor(private _bundlesService: BundleService,
              private _productService:ProductService) {
  }

  ngOnInit(): void {
    this.getAllBundles()
    this.getAllProducts()
  }

  getAllBundles(){
    this._bundlesService.getAllBundles().subscribe((data:any)=>{
      this.bundles=data
    })
  }
  getAllProducts(){
    this._productService.getAllProducts().subscribe((data:any)=>{
      this.products=data
    })
  }

  calculateYouSave(bundleId: string) {
    const bundle = this.bundles.find((b) => b.id === bundleId);
    if (!bundle) {
      console.error(`Bundle con ID ${bundleId} not found.`);
    }
    const bundleProducts = this.products.filter((product) => product.bundleId === bundleId);
    const totalIndividualPrice = bundleProducts.reduce((acc, product) => acc + product.price, 0);
    return totalIndividualPrice - (bundle ? bundle.price : 0);
  }
}
