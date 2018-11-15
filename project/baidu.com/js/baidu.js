
	function sayHi(reponsedate){

	}
	$(function(){
		$('[type="text"]').keyup(function(e){
			if(e.keyCode==38||e.keyCode==40||e.keyCode==13) return;

			var keyWord=$(this).val();  //获取input输入的值
			$.ajax({
				url:"http://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?",
				type:"get",
				data:{wd:keyWord},
				dataType:"jsonp",
				jsonp:"cb",
				success:function(reponsedate){
					var result=reponsedate.s;
					var dropboxel=$('#dropbox');
					dropboxel.empty(); //清空li内容
					for(var i in result){
						$('<li/>').text(result[i]).appendTo(dropboxel);
					}
					dropboxel.show();

					$('ul').css("list-style","none");
					$('li').mouseenter(function(){
						$(this).css('background','#ccc');  //鼠标移入样式

					}).click(function(){ //点击获取列单内容
						var input=$(this).html();
						$('[type="text"]').val($(this).html());
						$('#dropbox').html('');

						//点击li内容可直接跳转搜索
						location.href="https://www.baidu.com/s?wd="+$('[type="text"]').val();
					});

						//鼠标移出事件样式
					$("li").mouseleave(function(){
						$(this).css('background','none')
					});
				//点击搜索
					$('[type="button"]').click(function(){
						var inputs=$('[type="text"]').val();
						location.href="https://www.baidu.com/s?wd="+$('[type="text"]').val();

						})	
				},error:function(xhr,error,exception){
						console.log(xhr)
						console.log(error)
						console.log(exception)
					}
			});
				//键盘事件  上,下,左,右,enter
		}).keydown(function(e){							   //下键
			var active=$('#dropbox li.active');
			if(e.keyCode==40){
				if(active.length==0||active.next().length==0){
					$('#dropbox li').first().addClass('active').siblings().removeClass('active');
				}else{
						$(active).next().addClass('active').siblings().removeClass('active');
					}
					$('[type="text"]').val($('li.active').text());
				}else if(e.keyCode==38){ 					//上键
					if(active.length==0||active.prev().length==0){
						$('#dropbox li').last().addClass('active').siblings().removeClass('active')
					}else{
						$(active).prev().addClass('active').siblings().removeClass('active');
					}
					$('[type="text"]').val($('li.active').text())
				}else if(e.keyCode==13){ 				    //enter 键
					location.href="https://www.baidu.com/s?wd="+$('[type="text"]').val();
				}
			})
		})