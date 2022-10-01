$(document).ready(function() {

    // getRecaptcha();
    
    $('.loai-the').click(function(event) {
    	var loaithe = $(this).attr('alt');
    	$('input[name=loaithe]').val(loaithe);
    	$('.loai-the').removeClass('active');
    	$(this).addClass('active');
    });
    
    
    $('#napthe').click(function(event) {
    
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
    
    });
    
});
