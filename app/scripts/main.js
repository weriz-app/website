$('.collapsible a').on('click',function(a){    
    var li = $( this ).parent();
    li.toggleClass('selected');
    li.siblings().removeClass('selected');
});
window.ml_webform_after_success = function(){
    toastr.options.positionClass='toast-bottom-right';
    toastr.success('You have successfully subscribed to our newsletter!','Thank you!').css('width','400px');
    ;
}