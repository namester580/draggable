/**
 * Created by CoBLiN on 2016/04/28.
 */
$(document).ready(function() {


   // $('div').draggable();
var drg = false;




//make div stay in front
   $('body').append('<div style="display:inline-block;top:0;position:fixed;z-index: 1101;"><button id = "dragbut" style = "background-color: #2b2b2b;color: white">make all elements draggable</button></div>');
      $('#dragbut').click(function(){
      if(drg == false) {
          $('*').each(function () {
              $(this).draggable();

          });
          $('#dragbut').html('make all elements undraggable');
          drg = true;
      }else{
          $('*').each(function () {
              $(this).draggable('destroy');

          });
          drg = false;
          $('#dragbut').html('make all elements draggable');

      }
    });



























});
