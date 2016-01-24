$(document).ready(function() {
    //当页面加载ok时就请求推荐的ajax并将返回的数据加载到html页面上(推荐)
    $("#newsbtn1").css("borderBottom", "1px solid #ffffff");
    // event.preventDefault();
    $.ajax({
        cache: true,
        url: '/recommend',
        type: "post",
        async: false,
        success: function(data) {
            if (data.length != 0) {
                var html = '';
                var img = $('<img class="imgstyle">');
                $.each(data, function(valueIndex, value) {
                    var time = value.newsDate.substring(0, 10);
                    html += '<div class="row">';
                    html += '<div class="col-xs-12 news">';
                    html += '<div id="news1img" class="img">' + '</div>';
                    html += '<h5 class="news-title">' + value.title + '<h5>';
                    html += '<p class="news-p1">' + value.content + '<p>';
                    html += '<p class="news-date">' + time + '<p>';
                    html += '</div>';
                    html += '</div>';
                    img.attr('src', value.img);
                });
                $('#news1').html(html);
                img.appendTo('#news1img');
            } else {
                $("#news1info").show();
            };
        },
        error: function() {
            console.log('加载失败');
        }
    });
    //推荐
    $("#newsbtn1").click(function(event) {
        //切换推荐页面的显示内容
        $(this).css("borderBottom", "1px solid #ffffff");
        $("#newsbtn2").css("borderBottom", "none");
        $("#newsbtn3").css("borderBottom", "none");
        $("#newsbtn4").css("borderBottom", "none");
        $("#newsbtn5").css("borderBottom", "none");
        $("#newsbtn6").css("borderBottom", "none");
        $("#news1").show().siblings().hide();
        // event.preventDefault();
    });
    //娱乐
    $("#newsbtn2").click(function() {
        //切换娱乐页面的显示内容
        $(this).css("borderBottom", "1px solid #ffffff");
        $("#newsbtn1").css("borderBottom", "none");
        $("#newsbtn3").css("borderBottom", "none");
        $("#newsbtn4").css("borderBottom", "none");
        $("#newsbtn5").css("borderBottom", "none");
        $("#newsbtn6").css("borderBottom", "none");
        $("#news2").show().siblings().hide();
        // event.preventDefault();
        $.ajax({
            cache: true,
            url: '/entertainment',
            type: "post",
            async: false,
            success: function(data) {
                if (data.length != 0) {
                    var html = '';
                    var img = $('<img class="imgstyle">');
                    $.each(data, function(valueIndex, value) {
                        var time = value.newsDate.substring(0, 10);
                        img.attr('src', value.img);
                        html += '<div class="row">';
                        html += '<div class="col-xs-12 news">';
                        html += '<div id="news2img" class="img">' + '</div>';
                        html += '<h5 class="news-title">' + value.title + '<h5>';
                        html += '<p class="news-p1">' + value.content + '<p>';
                        html += '<p class="news-date">' + time + '<p>';
                        html += '</div>';
                        html += '</div>';
                        // console.log(img);
                    });
                    $('#news2').html(html);
                    img.appendTo('#news2img');
                } else {
                    $("#news2info").show();
                };

            },
            error: function() {
                console.log('加载失败');
            }
        });
    });
    //军事
    $("#newsbtn3").click(function() {
        //切换军事页面的显示内容
        $(this).css("borderBottom", "1px solid #ffffff");
        $("#newsbtn1").css("borderBottom", "none");
        $("#newsbtn2").css("borderBottom", "none");
        $("#newsbtn4").css("borderBottom", "none");
        $("#newsbtn5").css("borderBottom", "none");
        $("#newsbtn6").css("borderBottom", "none");
        $("#news3").show().siblings().hide();
        // event.preventDefault();
        $.ajax({
            cache: true,
            url: '/military',
            type: "post",
            async: false,
            success: function(data) {
                if (data.length != 0) {
                    var html = '';
                     var img = $('<img class="imgstyle">');
                    $.each(data, function(valueIndex, value) {
                        var time = value.newsDate.substring(0, 10);
                        img.attr('src', value.img);
                        html += '<div class="row">';
                        html += '<div class="col-xs-12 news">';
                         html += '<div id="news3img" class="img">' + '</div>';
                        html += '<h5 class="news-title">' + value.title + '<h5>';
                        html += '<p class="news-p1">' + value.content + '<p>';
                        html += '<p class="news-date">' + time + '<p>';
                        html += '</div>';
                        html += '</div>';
                    });
                    $('#news3').html(html);
                     img.appendTo('#news3img');
                } else {
                    $("#news3info").show();
                };

            },
            error: function() {
                console.log('加载失败');
            }
        });
    });
    //社会
    $("#newsbtn4").click(function() {
        //切换社会页面的显示内容
        $(this).css("borderBottom", "1px solid #ffffff");
        $("#newsbtn1").css("borderBottom", "none");
        $("#newsbtn2").css("borderBottom", "none");
        $("#newsbtn3").css("borderBottom", "none");
        $("#newsbtn5").css("borderBottom", "none");
        $("#newsbtn6").css("borderBottom", "none");
        $("#news4").show().siblings().hide();
        // event.preventDefault();
        $.ajax({
            cache: true,
            url: '/sociology',
            type: "post",
            async: false,
            success: function(data) {
                if (data.length != 0) {
                    var html = '';
                     var img = $('<img class="imgstyle">');
                    $.each(data, function(valueIndex, value) {
                        var time = value.newsDate.substring(0, 10);
                         img.attr('src', value.img);
                        html += '<div class="row">';
                        html += '<div class="col-xs-12 news">';
                         html += '<div id="news4img" class="img">' + '</div>';
                        html += '<h5 class="news-title">' + value.title + '<h5>';
                        html += '<p class="news-p1">' + value.content + '<p>';
                        html += '<p class="news-date">' + time + '<p>';
                        html += '</div>';
                        html += '</div>';
                    });
                    $('#news4').html(html);
                      img.appendTo('#news4img');
                } else {
                    $("#news4info").show();
                };

            },
            error: function() {
                console.log('加载失败');
            }
        });
    });
    //科技
    $("#newsbtn5").click(function() {
        //切换科技页面的显示内容
        $(this).css("borderBottom", "1px solid #ffffff");
        $("#newsbtn1").css("borderBottom", "none");
        $("#newsbtn2").css("borderBottom", "none");
        $("#newsbtn3").css("borderBottom", "none");
        $("#newsbtn4").css("borderBottom", "none");
        $("#newsbtn6").css("borderBottom", "none");
        $("#news5").show().siblings().hide();
        // event.preventDefault();
        $.ajax({
            cache: true,
            url: '/tech',
            type: "post",
            async: false,
            success: function(data) {
                if (data.length != 0) {
                    var html = '';
                    var img = $('<img class="imgstyle">');
                    $.each(data, function(valueIndex, value) {
                        var time = value.newsDate.substring(0, 10);
                        img.attr('src', value.img);
                        html += '<div class="row">';
                        html += '<div class="col-xs-12 news">';
                        html += '<div id="news5img" class="img">' + '</div>';
                        html += '<h5 class="news-title">' + value.title + '<h5>';
                        html += '<p class="news-p1">' + value.content + '<p>';
                        html += '<p class="news-date">' + time + '<p>';
                        html += '</div>';
                        html += '</div>';
                    });
                    $('#news5').html(html);
                    img.appendTo('#news5img');
                } else {
                    $("#news5info").show();
                };

            },
            error: function() {
                console.log('加载失败');
            }
        });
    });
    //女人
    $("#newsbtn6").click(function() {
        //切换女人页面的显示内容
        $(this).css("borderBottom", "1px solid #ffffff");
        $("#newsbtn1").css("borderBottom", "none");
        $("#newsbtn2").css("borderBottom", "none");
        $("#newsbtn3").css("borderBottom", "none");
        $("#newsbtn4").css("borderBottom", "none");
        $("#newsbtn5").css("borderBottom", "none");
        $("#news6").show().siblings().hide();
        // event.preventDefault();
        $.ajax({
            cache: true,
            url: '/women',
            type: "post",
            async: false,
            success: function(data) {
                if (data.length != 0) {
                    var html = '';
                     var img = $('<img class="imgstyle">');
                    $.each(data, function(valueIndex, value) {
                        var time = value.newsDate.substring(0, 10);
                        html += '<div class="row">';
                        html += '<div class="col-xs-12 news">';
                        html += '<div id="news6img" class="img">' + '</div>';
                        html += '<h5 class="news-title">' + value.title + '<h5>';
                        html += '<p class="news-p1">' + value.content + '<p>';
                        html += '<p class="news-date">' + time + '<p>';
                        html += '</div>';
                        html += '</div>';
                    });
                    $('#news6').html(html);
                    img.appendTo('#news6img');
                } else {
                    $("#news6info").show();
                };
            },
            error: function() {
                console.log('加载失败');
            }
        });
    });
});
