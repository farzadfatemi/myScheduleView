import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css', './purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  title = 'myScheduleView';

  constructor() {
  }

  ngOnInit() {
    // $(document).ready(function(){
    //   $("button").click(function(){
    //     var div = $("div");
    //     div.animate({left: '100px'}, "slow");
    //     div.animate({fontSize: '5em'}, "slow");
    //   });
    // });
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

  }

}

//.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
