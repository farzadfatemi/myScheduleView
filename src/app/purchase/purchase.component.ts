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
        $('#bunnings').addClass('animated rubberBand faster').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $('#bunnings').removeClass('animated rubberBand faster');
        }).animate( { "opacity": "hide", top:"100"} , 500 );
        $('#bunnings-in-list').addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $('#bunnings-in-list').removeClass('animated bounceIn');
        }).animate( { "opacity": "show", top:"100"} , 500 );
        // $('#bunnings').animate( { "opacity": "hide", top:"100"} , 500 );
        // $("#bunnings-in-list").animate( { "opacity": "show", top:"100"} , 500 );
      });
      $("#bunnings-in-list").click(function(){
        // $('#bunnings').removeClass('animated rubberBand faster').addClass('animated bounceInRight').animate( { "opacity": "show", top:"100"} , 500 );
        // $('#bunnings-in-list').removeClass('animated bounceIn').addClass('animated bounceOut faster').animate( { "opacity": "hide", top:"100"} , 500 );
        $('#bunnings').addClass('animated bounceInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $('#bunnings').removeClass('animated bounceInRight');
        }).animate( { "opacity": "show", top:"100"} , 500 );
        $('#bunnings-in-list').addClass('animated bounceOut faster').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $('#bunnings-in-list').removeClass('animated bounceOut faster');
        }).animate( { "opacity": "hide", top:"100"} , 500 );
       // $('#bunnings').animate( { "opacity": "show", top:"100"} , 500 );
       //  $('#bunnings-in-list').animate( { "opacity": "hide", top:"100"} , 500 );
      });
    });

  }

}
