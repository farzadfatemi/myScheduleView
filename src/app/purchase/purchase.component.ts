import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {NgxSpinnerService} from 'ngx-spinner';
import {Purchase} from '../domain/purchase';
import {PurchaseService} from './purchase.service';


const URL = 'http://localhost:8080/';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css', './purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  title = 'myScheduleView';
  respFinal: String = '';
  cols: any[];
  purchaseList: Purchase[];
  constructor(
    private purchaseService: PurchaseService,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.cols = [
      { field: 'purchaseId', header: 'Purchase Id', width: '25%'},
      { field: 'productId', header: 'product Id', width: '15%' },
      { field: 'sellerId', header: 'Seller Id', width: '35%' },
      { field: 'categoryId', header: 'Category Id', width: '25%' },
      { field: 'manufacturerId', header: 'Manufacturer Id', width: '25%' },
      { field: 'price', header: 'Price', width: '25%' },
      { field: 'amount', header: 'Amount', width: '25%' },
      { field: 'todo', header: 'Todo', width: '25%' },
      { field: 'comment', header: 'Comment', width: '25%' },
      { field: 'date', header: 'Date', width: '25%' }
    ];

    this.purchaseService.getAllPurchases().then(purchaseList => {
      // alert("---PLL--"+JSON.stringify(purchaseList));
      this.purchaseList = purchaseList
    });
    // alert(this.purchaseList);
    $(document).ready(function () {
      const animationEnd = (function (el) {
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


      // $('#bunnings').click(function () {
      //   $('#bunnings').addClass('animated rubberBand faster').animate({'opacity': 'hide'}, 500).one(animationEnd, function () {
      //     $('#bunnings').removeClass('animated rubberBand faster');
      //   });
      //   $('#bunnings-in-list').removeClass('flipOutX').addClass('animated bounceIn').animate({'opacity': 'show'}, 500).one(animationEnd, function () {
      //     $('#bunnings-in-list').removeClass('animated bounceIn');
      //   });
      // });
      // $('#bunnings-in-list').click(function () {
      //   $('#bunnings').addClass('animated bounceInRight').animate({'opacity': 'show'}, 500).one(animationEnd, function () {
      //     $('#bunnings').removeClass('animated bounceInRight');
      //   });
      //   $('#bunnings-in-list').addClass('animated flipOutX faster').animate({
      //     'opacity': 'hide'
      //   }, 500).one(animationEnd, function () {
      //     $('#bunnings-in-list').removeClass('animated flipOutX faster');
      //   });
      // });

      $('[id^=outOfList]').click(function () {
        // alert($(this).attr('id'));
        $('#' + $(this).attr('id')).addClass('animated rubberBand faster').animate({'opacity': 'hide'}, 500).one(animationEnd, function () {
          $('#' + $(this).attr('id')).removeClass('animated rubberBand faster');
        });
        $('#' + $(this).attr('id').replace('outOfList','intoList')).removeClass('flipOutX').addClass('animated bounceIn').animate({'opacity': 'show'}, 500).one(animationEnd, function () {
          $('#' + $(this).attr('id').replace('outOfList','intoList')).removeClass('animated bounceIn');
        });

      });

      $('[id^=intoList]').click(function () {
        $('#' + $(this).attr('id').replace('intoList', 'outOfList')).addClass('animated bounceInRight').animate({'opacity': 'show'}, 500).one(animationEnd, function () {
          $('#' + $(this).attr('id').replace('intoList', 'outOfList')).removeClass('animated bounceInRight');
        });
        $('#' + $(this).attr('id')).addClass('animated flipOutX faster').animate({
          'opacity': 'hide'
        }, 500).one(animationEnd, function () {
          $('#' + $(this).attr('id')).removeClass('animated flipOutX faster');
        });

      });


    });


  }

 /* fileToUpload: File = null;
  materialFlowId: String = '0';

  inputId(event) {
    this.materialFlowId = event.target.value;
    console.log('id is -- > ' + event.target.value);
  }

  inputFile(event) {
    this.fileToUpload = event.target.files[0];
    console.log('File path -- > ' + event.target.files[0].name);
  }

  // onSubmit(id: string, file: File) {
  onSubmit() {

    console.log('POST');
    this.spinner.show();
    const frmData = new FormData();
    // @ts-ignore
    frmData.append('materialFlowId', this.materialFlowId);
    frmData.append('inputPackage', this.fileToUpload);
    console.log('id --> ' + this.materialFlowId);
    if(this.fileToUpload !=null){
      console.log('File name --> ' + this.fileToUpload.name);
    }
    if (this.fileToUpload != null && this.materialFlowId !== '0') {
      this.http.post(URL, frmData).subscribe(res => {
        const resp = JSON.parse(JSON.stringify(res));
        if (resp != null) {
          if (resp['ser:deposit_result'] != null) {
            if (resp['ser:deposit_result']['ser:is_error'] === false) {
              this.spinner.hide();
              console.log('--==>> ' + JSON.stringify(res));
              console.log('--ww==>> ' + resp['ser:deposit_result']['ser:sip_id']);
              this.respFinal = 'Successful !! Your Sip ID is : ' + resp['ser:deposit_result']['ser:sip_id'];
            } else {
              this.spinner.hide();
              this.respFinal = ' Error occurred!! : ' + resp['ser:deposit_result']['ser:message_desc'];
            }
          } else {
            this.spinner.hide();
            this.respFinal = ' Error occurred!! : ' + resp['error-message'];
          }
        }else {
          this.spinner.hide();
          this.respFinal = 'Sorry!! No result for id : '+ this.materialFlowId +' and file : '+ this.fileToUpload.name;
        }
        this.materialFlowId = '';
      }, error => {
        this.spinner.hide();
        this.respFinal = 'Error occurred!! : Server Not Responded!!!';
      });
    } else {
      this.spinner.hide();
      this.respFinal = 'Error occurred!! : ID and Zip file are compulsory!!!';
    }
  }*/

}

//.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
