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
var dynamicTextValues = ['Flourished','Fun','Efficient','Smart','Safe','Easy','Benficial','Surprised','Rich']
 $('.logo').on('animationend', function(){   
    var i=1;
    var interval = setInterval(function(){
        var opacity = 0.5-0.05*(i-1);
        $('.citizen-background').append('<div class="crescent-container" style="margin-right:'+((i==1)?0:'-19.7')+'%;"><svg viewBox="0 0 183.205 286.768" preserveAspectRatio="xMidYMid meet" class="crescent"><use xlink:href="#crescent-flipped" fill="#04ADD9" fill-opacity="'+opacity+'" /></svg></div>');
        $('.biz-background').append('<div class="crescent-container" style="margin-left:'+((i==1)?0:'-19.7')+'%;"><svg viewBox="0 0 183.205 286.768" preserveAspectRatio="xMidYMid meet" class="crescent"><use xlink:href="#crescent" fill="#0758BA" fill-opacity="'+opacity+'"/></svg></div>');
        if(++i>9){
            clearInterval(interval);
            $('.citizen-picto').append('<img src="images/citizen-picto.png" class="intro-picto fadeIn" alt="citizens">');
            $('.biz-picto').append('<img src="images/biz-picto.png" class="intro-picto fadeIn" alt="local businesses">');
            $('.citizen-text-container').append('<h1 class="intro-citizen-title fadeIn">Personal Assistant for Ideal Local Life</h1>');
            $('.citizen-text-container').append('<div class="intro-text fadeIn">Tell Weriz about yourself, your needs and interests, and Weriz lets you discover your ideal lifestyle efficiently.</div>');
            $('.biz-text-container').append('<h1 class="intro-biz-title fadeIn">Marketing Platform for Local Businesses</h1>');
            $('.biz-text-container').append('<div class="intro-text fadeIn">Go viral within your targeted neighborhood with the first world marketing platform for local businesses.</div>');
            $('.dynamic-text').append('<span class="static fadeIn">Go Locally</span> <span class="dynamic">'+dynamicTextValues[0]+'!</span>');
            
            var j = 1;
            setInterval(function(){
                $('.dynamic').html(dynamicTextValues[j]+'!');
                j=(j+1)%9;
            },1500);
          
        }
    }, 150);
});
