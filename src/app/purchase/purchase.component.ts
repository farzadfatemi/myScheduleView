import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css','./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  title = 'myScheduleView';
  constructor() { }

  ngOnInit() {
    // $(document).ready(function(){
    //   $("button").click(function(){
    //     var div = $("div");
    //     div.animate({left: '100px'}, "slow");
    //     div.animate({fontSize: '5em'}, "slow");
    //   });
    // });
    $(document).ready(function(){
      $("#bunnings").click(function(){
        $("#bunnings").animate( { "opacity": "hide", top:"100"} , 500 );
        $("#bunnings-in-list").animate( { "opacity": "show", top:"100"} , 500 );
      });
      $("#bunnings-in-list").click(function(){
        $("#bunnings").animate( { "opacity": "show", top:"100"} , 500 );
        $("#bunnings-in-list").animate( { "opacity": "hide", top:"100"} , 500 );
      });
    });

  }

}
