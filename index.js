/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';



$(function addItem(){
  $('#js-shopping-list-form').on('submit',function(event){
    event.preventDefault();    
    
    const newListItem = $(event.currentTarget).find(`input[id='shopping-list-entry']`).val();
    

    $('.shopping-list').append(`<li>
    <span class="shopping-item">${newListItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
  });  
});

$(function checkMark(){
  $('.shopping-list').on('click','.shopping-item-toggle',function(e){
    e.preventDefault(); 
    $(this).closest('li').find(`.shopping-item`).toggleClass('shopping-item__checked');
  });
});

$(function deleteItem(){
  $(`.shopping-list`).on(`click`,`.shopping-item-delete`,function(e){
    e.preventDefault(); 
    $(this).closest('li').remove();
  });
});