/**
 * Created by CoBLiN on 2016/04/28.
 */
$(document).ready(function() {


   // $('div').draggable();
var drg = false;





    $('body').append('<div style="display:inline-block;top:0;position:fixed"><button id = "dragbut">make all elements draggable</button></div>');
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