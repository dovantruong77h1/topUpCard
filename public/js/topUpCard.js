$(function(){
    $('.loai-the').click(function(event) {
        var loaithe = $(this).attr('alt');
        $('input[name=loaithe]').val(loaithe);
        $('.loai-the').removeClass('active');
        $(this).addClass('active');
    });

    $('#napthe').click(function(e){
        e.preventDefault();

        // validation

        $('.error-msg').addClass('hide');
        $('#result').html('');
        
        var greresponse = $('#token').val();
        var taikhoan = $('input[name=account]').val();
        var loaithe = $('input[name=loaithe]').val();
        var seri = $('input[name=seri]').val();
        var mathe = $('input[name=mathe]').val();
        var menhgia = $('#menhgia :selected').val();
        var utm_source = $('input[name=utm_source]').val();
        
        if (taikhoan.length < 5) {
            $('.error-msg').removeClass('hide');
            $('.error-msg').html('⛔️ Vui lòng điền thông tin tài khoản cần nạp.');
            return false;
        }
        
    
        if (loaithe == '') {
            $('.error-msg').removeClass('hide');
            $('.error-msg').html('⛔️ Vui lòng chọn loại thẻ cần nạp.');
            return false;
        }
        
        if (menhgia == 0) {
            $('.error-msg').removeClass('hide');
            $('.error-msg').html('⛔️ Vui lòng chọn mệnh giá thẻ.');
            return false;
        }
    
        if (seri.length < 6) {
            $('.error-msg').removeClass('hide');
            $('.error-msg').html('⛔️ Vui lòng nhập số seri thẻ.');
            return false;
        }
    
        if (mathe.length < 6) {
            $('.error-msg').removeClass('hide');
            $('.error-msg').html('⛔️ Vui lòng nhập mã thẻ.');
            return false;
        }

        // validation


        // to up card

        var data = {};
        data.type = $("#telco").val();
        data.loaithe = $("#telco").val();
        data.amount = $("#menhgia").val();
        data.code = $("#mathe").val();
        data.serial = $("#seri").val();
        
        $.ajax({
            url: '/top-up-card',						
            method: 'POST',
            dataType: 'json',
            data: data,
            success: function(data) {
                console.log(data.status);
                switch (data.status) {
                    case 1:
                        alert("Bạn đã nạp thành công. Hệ thống sẽ xét duyệt trong vòng 30 giây đến 1 phút. Cảm ơn!");
                        break;
                
                    case 2:
                        alert("Bạn đã nạp thành công. Hệ thống sẽ xét duyệt trong vòng 30 giây đến 1 phút. Cảm ơn!");
                        break;
                    case 3:
                        alert("Nạp thất bại. Vui lòng kiểm tra số seri hoặc mã thẻ đã chính xác chưa!");
                        break;
                    case 4:
                        alert("Nạp thất bại. Vui lòng kiểm tra số seri hoặc mã thẻ đã chính xác chưa!");
                        break;
                    case 99:
                        alert("Bạn đã nạp thành công. Hệ thống sẽ xét duyệt trong vòng 30 giây đến 1 phút. Cảm ơn!");
                        break;
                    case 101:
                        alert("Nạp thất bại. Vui lòng kiểm tra số seri hoặc mã thẻ đã chính xác chưa!");
                        break;
                    default:
                        alert("Nạp thất bại. Vui lòng kiểm tra số seri hoặc mã thẻ đã chính xác chưa!") ;
                        break;
                }
            },
            error  : function() { console.log('error');}
        });
    
        // to up card

    });				
});