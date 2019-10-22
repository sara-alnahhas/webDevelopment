'use strict' ;
$(function () {
   //configuration 
    var width = 1000;
    var animationSpeed = 2000;
    var pause = 2500;
    var currentSilde = 1;
    
    // cache DOM 
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide')
    
    var interval ;
    
    function startSlider(){
       interval =  setInterval(function(){
              $slideContainer.animate({'margin-left':'-='+width},animationSpeed , function(){
                  currentSilde++;
                  if(currentSilde === $slides.length)
                      {
                          currentSilde=1;
                          $slideContainer.css('margin-left', 0);
                      }
              });

        },pause);
        
    }
    
    function stopSlider(){
        clearInterval(interval);   
    }
    
    $slider.on('mouseenter', stopSlider ).on('mouseleave', startSlider);
    
    startSlider();
   
});
