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
  purchaseList: Purchase[];
  constructor(
    private purchaseService: PurchaseService,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.purchaseService.getAllPurchases().then(purchaseList => this.purchaseList = purchaseList);
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


    });



/*    $(document).ready(function () {
      var counter = 0;

      $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols = "";

        cols += '<td><input type="text" class="form-control" name="name' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="mail' + counter + '"/></td>';
        cols += '<td><input type="text" class="form-control" name="phone' + counter + '"/></td>';

        cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
        newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
      });



      $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();
        counter -= 1
      });


    });



    function calculateRow(row) {
      var price = +row.find('input[name^="price"]').val();

    }

    function calculateGrandTotal() {
      var grandTotal = 0;
      $("table.order-list").find('input[name^="price"]').each(function () {
        grandTotal += +$(this).val();
      });
      $("#grandtotal").text(grandTotal.toFixed(2));
    }*/




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
