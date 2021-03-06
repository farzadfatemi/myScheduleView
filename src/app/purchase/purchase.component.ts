import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {NgxSpinnerService} from 'ngx-spinner';
import {Purchase} from '../domain/purchase';
import {PurchaseService} from './purchase.service';
import {SellerService} from '../seller/seller.service';
import {Seller} from '../domain/seller';
import {UnitService} from '../unit/unit.service';
import {Unit} from '../domain/unit';
import {CategoryService} from '../category/category.service';
import {Category} from '../domain/category';
import {Product} from '../domain/product';
import {ProductService} from '../product/product.service';
import {Company} from '../domain/company';
import {CompanyService} from '../company/company.service';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css', './purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  cols: any[];
  selectedColumns: any[];
  isNewProduct: boolean = false;
  purchaseList: Purchase[];
  sellerList: Seller[];
  unitList: Unit[];
  categoryList: Category[];
  productList: Product[];
  companyList: Company[];
  selectedProduct: Product;
  model: any = {};

  // @Input() testVar: String='33';
  constructor(
    private purchaseService: PurchaseService,
    private sellerServices: SellerService,
    private unitServices: UnitService,
    private categoryServices: CategoryService,
    private productServices: ProductService,
    private companyServices: CompanyService,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit() {

    // alert(this.purchaseList);
    $(document).ready(function () {
      const animationEnd = (function (el) {
        // alert("animationEnd");
        const animations = {
          'animation': 'animationend',
          'OAnimation': 'oAnimationEnd',
          'MozAnimation': 'mozAnimationEnd',
          'WebkitAnimation': 'webkitAnimationEnd'
        };

        for (const t in animations) {
          if (el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement('div'));

      $( "p" ).click(function() {
        $( this ).slideUp();
      });
      $( "#outOfList1" ).click(function() {
        // alert( "Handler for .click() called." );
      });
      $('[id^=outOfList]').click(function () {
        // alert("2");
        $('#' + $(this).attr('id')).addClass('animated rubberBand faster').animate({'opacity': 'hide'}, 500).one(animationEnd, function () {
          $('#' + $(this).attr('id')).removeClass('animated rubberBand faster');
        });
        $('#' + $(this).attr('id').replace('outOfList', 'intoList')).removeClass('flipOutX').addClass('animated bounceIn').animate({'opacity': 'show'}, 500).one(animationEnd, function () {
          $('#' + $(this).attr('id').replace('outOfList', 'intoList')).removeClass('animated bounceIn');
        });

      });

      $('[id^=intoList]').click(function () {
        // alert("2");
        $('#' + $(this).attr('id').replace('intoList', 'outOfList')).addClass('animated bounceInRight').animate({'opacity': 'show'}, 500).one(animationEnd, function () {
          $('#' + $(this).attr('id').replace('intoList', 'outOfList')).removeClass('animated bounceInRight');
        });
        $('#' + $(this).attr('id')).addClass('animated flipOutX faster').animate({
          'opacity': 'hide'
        }, 500).one(animationEnd, function () {
          $('#' + $(this).attr('id')).removeClass('animated flipOutX faster');
        });

      });


      $(function () {
        $('.dropdown-menu a').click(function () {
          console.log($(this).attr('data-value'));
          $('input[name=product]').val($(this).attr('data-value'));
        });
      });


    });



    this.cols = [
      {field: 'id', header: 'Purchase Id', width: '25%'},
      {field: 'productId', header: 'product Id', width: '15%'},
      {field: 'sellerId', header: 'Seller Id', width: '35%'},
      {field: 'categoryId', header: 'Category Id', width: '25%'},
      {field: 'companyId', header: 'Company Id', width: '25%'},
      {field: 'price', header: 'Price', width: '25%'},
      {field: 'amount', header: 'Amount', width: '25%'},
      {field: 'unitId', header: 'Unit Id', width: '25%'},
      {field: 'isDone', header: 'Todo', width: '25%'},
      {field: 'description', header: 'Comment', width: '25%'},
      {field: 'date', header: 'Date', width: '25%'}
    ];
    this.selectedColumns = this.cols;
    this.purchaseService.getAllPurchases().then(purchaseList => {
      this.purchaseList = purchaseList;

      // this.purchaseList.sort((val1, val2)=> {return <any>new Date(val2.date) - <any>new Date(val1.date)});
      this.purchaseList.sort((val1, val2) => {
        return (val2.id) - (val1.id);
      });
      // console.log("All Purchases : "+ JSON.stringify(this.purchaseList));

    });
    this.unitServices.getAllUnits().then(unitsList => {
      this.unitList = unitsList;
    });
    this.sellerServices.getAllSellers().then(sellerList => {
      this.sellerList = sellerList;
    });
    this.categoryServices.getAllCategories().then(categoryList => {
      this.categoryList = categoryList;
    });
    this.productServices.getAllProducts().then(productList => {
      this.productList = productList;
    });
   this.companyServices.getAllCompanies().then(companyList => {
      this.companyList = companyList;
    });


  }

  // customSort(event: SortEvent) {
  //   event.data.sort((data1, data2) => {
  //     let value1 = data1[event.field];
  //     let value2 = data2[event.field];
  //     let result = null;
  //
  //     if (value1 == null && value2 != null)
  //       result = -1;
  //     else if (value1 != null && value2 == null)
  //       result = 1;
  //     else if (value1 == null && value2 == null)
  //       result = 0;
  //     else if (typeof value1 === 'string' && typeof value2 === 'string')
  //       result = value1.localeCompare(value2);
  //     else
  //       result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
  //
  //     return (event.order * result);
  //   });
  // }


  addRow() {
    const newPurchase = {
      id: '18',
      sellerId: '31',
      categoryId: '15',
      companyId: '61',
      price: '55',
      amount: '33',
      unitId: '33',
      todo: '1',
      name: 'New Purchase',
      description: 'adding New Purchase',
      date: '2018-10-19',
      productId:'1'
    };
    let newP = [...this.purchaseList];
    newP.push(newPurchase);

    this.purchaseList = (newP);
    this.sortFunc(this.purchaseList, 'id');
  }

  sortFunc(data, id) {
    return data.sort((a, b) => {
      if (id === 'date') {
        return <any>new Date(b[id]) - <any>new Date(a[id]);
      } else {
        return (b[id]) - (a[id]);
      }
    });
  }

  handleClose(e) {
    if (true)
      e.close();
  }

  onSubmit() {
    this.purchaseService.addPurchases(this.model);
    // alert('SUCCESS!! :-)\n\n'  )
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }


  productChangeEv(value) {
    this.selectedProduct = value;
    if (value === '') {
      $('#newProduct').show(500);
      $('#productItem').hide(500);
      this.isNewProduct = true;
    }
    console.log('selectedProduct is -- > ' + value);
  }

  productChangeImg() {

    $('#newProduct').toggle(500);
    $('#productItem').toggle(500);
    this.isNewProduct = !this.isNewProduct;
    console.log('isNewProduct  -- > ' + this.isNewProduct);
  }


}

