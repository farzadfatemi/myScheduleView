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
      var animationEnd = (function(el) {
        var animations = {
          "animation": "animationend",
          "OAnimation": "oAnimationEnd",
          "MozAnimation": "mozAnimationEnd",
          "WebkitAnimation": "webkitAnimationEnd"
        };

        for(var t in animations) {
          if(el.style[t] !== undefined) {
            return animations[t];
          }
        }
      })(document.createElement("div"));
      $("#bunnings").click(function(){
        $('#bunnings').addClass('animated rubberBand faster').animate( { "opacity": "hide", top:"100"} , 500 ).one(animationEnd, function() {
          $('#bunnings').removeClass('animated rubberBand faster');
        });
        $('#bunnings-in-list').addClass('animated bounceIn').animate( { "opacity": "show", top:"100"} , 500 ).one(animationEnd, function() {
          $('#bunnings-in-list').removeClass('animated bounceIn');
        });
        // $('#bunnings').animate( { "opacity": "hide", top:"100"} , 500 );
        // $("#bunnings-in-list").animate( { "opacity": "show", top:"100"} , 500 );
      });
      $("#bunnings-in-list").click(function(){
        // $('#bunnings').removeClass('animated rubberBand faster').addClass('animated bounceInRight').animate( { "opacity": "show", top:"100"} , 500 );
        // $('#bunnings-in-list').removeClass('animated bounceIn').addClass('animated bounceOut faster').animate( { "opacity": "hide", top:"100"} , 500 );
        $('#bunnings').addClass('animated bounceInRight').animate( { "opacity": "show", top:"100"} , 500 ).one(animationEnd, function() {
          $('#bunnings').removeClass('animated bounceInRight');
        });
        $('#bunnings-in-list').addClass('animated bounceOut faster').animate( { "opacity": "hide", top:"100"} , 500 ).one(animationEnd, function() {
        // $('#bunnings-in-list').addClass('animated bounceOut faster').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $('#bunnings-in-list').removeClass('animated bounceOut faster');
        })
       // $('#bunnings').animate( { "opacity": "show", top:"100"} , 500 );
       //  $('#bunnings-in-list').animate( { "opacity": "hide", top:"100"} , 500 );
      });
    });

  }

}
