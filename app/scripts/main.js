$('.collapsible a').on('click',function(a){    
    var li = $( this ).parent().parent();
    li.toggleClass('selected');
    li.siblings().removeClass('selected');
});
$('.subscription-btn').on('click',function(){
    gtag('event', 'subscribed', {
        'event_category': 'Buttons',
        'event_label': 'Subscription Button'
      });   
});
window.ml_webform_after_success = function(){
    toastr.options.positionClass='toast-bottom-right';
    toastr.success('You have successfully subscribed to our newsletter!','Thank you for your interest').css('width','400px');
    ;
}