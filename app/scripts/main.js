console.log('\'Allo \'Allo!');

[].forEach.call(document.querySelectorAll('.collapsible a'),function(a){
    a.addEventListener('click',function(){
        var li = a.parentElement;
        if(li.classList.contains('selected'))
            li.classList.remove('selected');
        else
            li.classList.add('selected');
        var nextLi = li;
        var prevLi = li;
        while(nextLi=nextLi.nextSibling){if(nextLi.nodeName.toLowerCase() == 'li') nextLi.classList.remove('selected');}
        while(prevLi=prevLi.previousSibling){if(prevLi.nodeName.toLowerCase() == 'li') prevLi.classList.remove('selected');}
    });
});
