$(function(){	
    // function getRecaptcha() {
    
    // };		
    $('#napthe').click(function(e){
        e.preventDefault();
        // console.log('napthe clicked');
        
         /*$.ajax({
            dataType: 'jsonp',
            data: "data=yeah",						
            jsonp: 'callback',
            url: 'http://localhost:3000/endpoint?callback=?',						
            success: function(data) {
                console.log('success');
                console.log(JSON.stringify(data));
            }
        });*/
    
        var data = {};
        data.type = $("#telco").val();
        data.loaithe = $("#telco").val();
        data.amount = $("#menhgia").val();
        data.code = $("#mathe").val();
        data.serial = $("#seri").val();
        // console.log(data.serial = $("#seri").val());
        // console.log(data);
        
        $.ajax({
            url: '/check-card',						
            method: 'POST',
            dataType: 'json',
            // contentType: 'application/json',
            data: data,
            success: function(data) {
                console.log('success');
                console.log(data);
                // switch (data.status) {
                switch (data.status) {
                    case 1:
                        alert("Thẻ thành công đúng mệnh giá!");
                        break;
                
                    case 2:
                        alert("Thẻ thành công sai mệnh giá!");
                        break;
                    case 3:
                        alert("Thẻ lỗi!");
                        break;
                    case 4:
                        alert("Hệ thống bảo trì!");
                        break;
                    case 99:
                        alert("Thẻ chờ xử lý!");
                        break;
                    case 101:
                        alert("Thẻ không tồn tại!");
                        break;
                    default:
                        alert("Gửi thẻ thất bại - Có lý do đi kèm ở phần thông báo trả về") ;
                        break;
                }
            },
            error  : function() { console.log('error');}
        });
    
        /*$.ajax('http://localhost:3000/endpoint', {
                type: 'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function() { console.log('success');},
                error  : function() { console.log('error');}
        });*/
    });				
});