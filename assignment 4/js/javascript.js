// JavaScript Document

	$("#tag").live("hover",function(){
		$("#eventUl").hide();
		$("#athleteUl").hide();
		$("#otherUl").hide();
		$("#mix").hide();
		$("#tagUl").fadeIn();									
	});
	$("#event").live("hover",function(){
		$("#tagUl").hide();
		$("#athleteUl").hide();
		$("#otherUl").hide();
		$("#mix").hide();
		$("#eventUl").fadeIn();									
	});
	$("#athlete").live("hover",function(){
		$("#tagUl").hide();
		$("#eventUl").hide();
		$("#otherUl").hide();
		$("#mix").hide();
		$("#athleteUl").fadeIn();									
	});
	$("#other").live("hover",function(){
		$("#tagUl").hide();
		$("#eventUl").hide();
		$("#athleteUl").hide();
		$("#mix").hide();
		$("#otherUl").fadeIn();									
	});		
	$("#search").live("hover",function(){
		$(".pics").html("");
		$("#tagUl").hide();
		$("#eventUl").hide();
		$("#athleteUl").hide();
		$("#otherUl").hide();
		$("#mix").fadeIn();									
	});	
			$("#OlympicsBtn").live("click",function(){
				$.ajax({
					type:"GET",
					dataType:"jsonp",
					cache:false,
					url:"https://api.instagram.com/v1/tags/olympics/media/recent?access_token=202089122.29436fb.cc00a90c34a84b92adc35fb79b792f3c",
					success:function(data){
						$(".pics").html("");
						for (var i = 0; i < 12; i++) {
							if(data.data[i].caption!=null)
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' title='" + data.data[i].caption.text + "' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
							else
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
						}
					}
				});
			});
			$("#LondonBtn").live("click",function(){
				$.ajax({
					type:"GET",
					dataType:"jsonp",
					cache:false,
					url:"https://api.instagram.com/v1/tags/london/media/recent?access_token=202089122.29436fb.cc00a90c34a84b92adc35fb79b792f3c",
					success:function(data){
						$(".pics").html("");
						for (var i = 0; i < 12; i++) {
							if(data.data[i].caption!=null)
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' title='" + data.data[i].caption.text + "' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
							else
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
						}
					}
				});
			});
			$("#OlympicTorchBtn").live("click",function(){
				$.ajax({
					type:"GET",
					dataType:"jsonp",
					cache:false,
					url:"https://api.instagram.com/v1/tags/olympicstorch/media/recent?access_token=202089122.29436fb.cc00a90c34a84b92adc35fb79b792f3c",
					success:function(data){
						$(".pics").html("");
						for (var i = 0; i < 12; i++) {
							if(data.data[i].caption!=null)
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' title='" + data.data[i].caption.text + "' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
							else
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
						}
					}
				});
			});
			$("#gymBtn").live("click",function(){
				$.ajax({
					type:"GET",
					dataType:"jsonp",
					cache:false,
					url:"https://api.instagram.com/v1/tags/gymnastics/media/recent?access_token=202089122.29436fb.cc00a90c34a84b92adc35fb79b792f3c",
					success:function(data){
						$(".pics").html("");
						for (var i = 0; i < 12; i++) {
							if(data.data[i].caption!=null)
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' title='" + data.data[i].caption.text + "' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
							else
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
						}
					}
				});
			});
			$("#swimBtn").live("click",function(){
				$.ajax({
					type:"GET",
					dataType:"jsonp",
					cache:false,
					url:"https://api.instagram.com/v1/tags/olympicswimming/media/recent?access_token=202089122.29436fb.cc00a90c34a84b92adc35fb79b792f3c",
					success:function(data){
						$(".pics").html("");
						for (var i = 0; i < 12; i++) {
							if(data.data[i].caption!=null)
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' title='" + data.data[i].caption.text + "' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
							else
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
						}
					}
				});
			});
			$("#fencingBtn").live("click",function(){
				$.ajax({
					type:"GET",
					dataType:"jsonp",
					cache:false,
					url:"https://api.instagram.com/v1/tags/fencing/media/recent?access_token=202089122.29436fb.cc00a90c34a84b92adc35fb79b792f3c",
					success:function(data){
						$(".pics").html("");
						for (var i = 0; i < 12; i++) {
							if(data.data[i].caption!=null)
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' title='" + data.data[i].caption.text + "' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
							else
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
						}
					}
				});
			});
			$("#LeyvaBtn").live("click",function(){
				$.ajax({
					type:"GET",
					dataType:"jsonp",
					cache:false,
					url:"https://api.instagram.com/v1/users/22725423/media/recent?access_token=202089122.29436fb.cc00a90c34a84b92adc35fb79b792f3c",
					success:function(data){
						$(".pics").html("");
						for (var i = 0; i < 12; i++) {
							if(data.data[i].caption!=null)
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' title='" + data.data[i].caption.text + "' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
							else
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
						}
					}
				});
			});
			$("#JamesBtn").live("click",function(){
				$.ajax({
					type:"GET",
					dataType:"jsonp",
					cache:false,
					url:"https://api.instagram.com/v1/users/19410587/media/recent?access_token=202089122.29436fb.cc00a90c34a84b92adc35fb79b792f3c",
					success:function(data){
						$(".pics").html("");
						for (var i = 0; i < 12; i++) {
							if(data.data[i].caption!=null)
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' title='" + data.data[i].caption.text + "' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
							else
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
						}
					}
				});
			});
			$("#AnthonyBtn").live("click",function(){
				$.ajax({
					type:"GET",
					dataType:"jsonp",
					cache:false,
					url:"https://api.instagram.com/v1/users/7732613/media/recent?access_token=202089122.29436fb.cc00a90c34a84b92adc35fb79b792f3c",
					success:function(data){
						$(".pics").html("");
						for (var i = 0; i < 12; i++) {
							if(data.data[i].caption!=null)
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' title='" + data.data[i].caption.text + "' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
							else
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
						}
					}
				});
			});
			$("#geoBtn").live("click",function(){
				$.ajax({
					type:"GET",
					dataType:"jsonp",
					cache:false,
					url:"https://api.instagram.com/v1/locations/1347234/media/recent?access_token=202089122.29436fb.cc00a90c34a84b92adc35fb79b792f3c",
					success:function(data){
						$(".pics").html("");
						for (var i = 0; i < 12; i++) {
							if(data.data[i].caption!=null)
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' title='" + data.data[i].caption.text + "' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
							else
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
						}
					}
				});
			});
			$("#chinaBtn").live("click",function(){
				$.ajax({
					type:"GET",
					dataType:"jsonp",
					cache:false,
					url:"https://api.instagram.com/v1/tags/teamchina/media/recent?access_token=202089122.29436fb.cc00a90c34a84b92adc35fb79b792f3c",
					success:function(data){
						$(".pics").html("");
						for (var i = 0; i < 12; i++) {
							if(data.data[i].caption!=null)
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' title='" + data.data[i].caption.text + "' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
							else
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
						}
					}
				});
			});
			$("#usaBtn").live("click",function(){
				$.ajax({
					type:"GET",
					dataType:"jsonp",
					cache:false,
					url:"https://api.instagram.com/v1/tags/teamusa/media/recent?access_token=202089122.29436fb.cc00a90c34a84b92adc35fb79b792f3c",
					success:function(data){
						$(".pics").html("");
						for (var i = 0; i < 12; i++) {
							if(data.data[i].caption!=null)
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' title='" + data.data[i].caption.text + "' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
							else
								$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
						}
					}
				});
			});
			$("#searchBtn").live("click",function(){
				$("#mix").hide();
				var tag;
				for(var i=0;i<document.form1.tagRadio.length;i++){  
				  	if(document.form1.tagRadio[i].checked){
					  	tag=document.form1.tagRadio[i].value;
				  		break;
				  	}
				}
				if(document.getElementById("fromOV").checked){
					$.ajax({
							type:"GET",
							dataType:"jsonp",
							cache:false,
							url:"https://api.instagram.com/v1/locations/1347234/media/recent?count=50&access_token=202089122.29436fb.cc00a90c34a84b92adc35fb79b792f3c",
							success:function(data){
								var length=data.data.length;
								$(".pics").html("");
								for (var i = 0; i < length; i++) {
									var taglength=data.data[i].tags.length;
									for(var j=0;j<taglength;j++){
										if(data.data[i].tags[j]==tag){
											if(data.data[i].caption!=null)
												$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' title='" + data.data[i].caption.text + "' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
											else
												$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
										}
									}
								}
							}
					});
				}
				else{
					$.ajax({
						type:"GET",
						dataType:"jsonp",
						cache:false,
						url:"https://api.instagram.com/v1/tags/" + tag + "/media/recent?count=20&access_token=202089122.29436fb.cc00a90c34a84b92adc35fb79b792f3c",
						success:function(data){
							$(".pics").html("");
							var length=data.data.length;
							var count=0;
								for (var i = 0; i < length; i++) {
									if(data.data[i].caption!=null)
										$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' title='" + data.data[i].caption.text + "' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
									else
										$(".pics").append("<a target='_blank' rel='lightbox[Olympics]' href='" + data.data[i].images.standard_resolution.url + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a>");
								}
						}
					});
				}
			});