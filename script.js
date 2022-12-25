$(function(){
    $(".contact-message-order-support-form").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    let s = document.getElementById('edit-submit');
                    s.innerHTML = "Ваша форма успешно отправлена"
                }else{
                    let s = document.getElementById('edit-submit');
                    s.innerHTML = "Произошла ошибка";
                }
            },
            error: function(){
                let s = document.getElementById('edit-submit');
                s.innerHTML = "Ошибка подключения";
              }
        });
    });
});



let e = document.getElementById('elem')
e.addEventListener( 'click' , function collapsElement() {
    let lastOpen = document.getElementById('mainMenu');
    if (lastOpen.style.display != 'none') {
        lastOpen.style.display = 'none';
    } else 
        lastOpen.style.display = 'block';
});