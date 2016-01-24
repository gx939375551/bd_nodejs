var express = require('express');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');
var multipart = require('connect-multiparty');
var bodyParser = require('body-parser');
var orm = require('orm');
var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static('./publics'));
app.use(morgan('dev'));
//连接数据库，创建数据模型！
app.use(orm.express("mysql://root:@localhost/my_news", {
    define: function(db, models, next) {
        models.News = db.define("News", {
            newsID: {
                type: 'serial',
                key: true
            },
            title: String,
            newstype: String,
            content: String,
            newsDate: String,
            img: String
        });
        next();
    }
}));
//全部新闻
app.post('/all', multipart(), function(req, res) {
    req.models.News.find({}, function(err, News) {
        res.json(News);
    });
});


//添加新闻的路由
app.post('/add', multipart(), function(req, res) {
    var title = req.body.addtitle; //获取添加的标题
    var newstype = req.body.addtype; //获取添加的类型
    var content = req.body.addtext; //获取添加的内容
    var newsDate = req.body.adddate; //获取添加的时间
    //获取文件名
    var filename = req.files.files.originalFilename || path.basename(req.files.files.path);
    //复制文件到公共目录
    var targetPath = path.dirname(__filename) + '/publics/img/' + filename;
    //复制文件
    fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));
    //重新组织图片地址

    var imgdata = 'http://' + req.headers.host + '/img/' + filename;

    res.send("添加成功");
    req.models.News.create({
        title: title,
        newstype: newstype,
        content: content,
        newsDate: newsDate,
        img: imgdata
    }, function(err) {
        if (err) throw err;
    });
});
//查找新闻的路由
app.get('/find', multipart(), function(req, res) {
    var newsID = req.query.id;
    req.models.News.find({
        newsID: newsID
    }, function(err, News) {
        res.json(News);
    });

});
//删除新闻的路由
app.get('/dele', multipart(), function(req, res) {
    var newsID = req.query.id;
    req.models.News.find({
        newsID: newsID
    }).remove(function(err) {
        res.send("删除成功");
    });
});
//更新新闻的路由
app.post('/update', multipart(), function(req, res) {
    var newsID = req.body.updateid;//获取新闻ID 作为查询标注
    var title = req.body.updatetitle; //获取更新的标题,这是更改的标准
    var newstype = req.body.updatetype; //获取更新的类型
    var content = req.body.updatetext; //获取更新的内容
    var newsDate = req.body.updatedate; //获取更新的日期
    req.models.News.find({
        newsID: newsID
    }).each(function(data) {
        data.title = title;
        data.newstype = newstype;
        data.content = content;
        data.newsDate = newsDate;
        res.send("更新成功");
    }).save(function(err) {
        console.log(err);
    });
});
//index - - - - - - - - - - - - 
//推荐
app.post('/recommend', multipart(), function(req, res) {
    req.models.News.find({
        newstype: "推荐"
    }, function(err, News) {
        res.json(News);
    });

});
//娱乐
app.post('/entertainment', multipart(), function(req, res) {
    req.models.News.find({
        newstype: "娱乐"
    }, function(err, News) {
        res.json(News);
    });

});
//军事
app.post('/military', multipart(), function(req, res) {
    req.models.News.find({
        newstype: "军事"
    }, function(err, News) {
        res.json(News);
    });

});
//社会
app.post('/sociology', multipart(), function(req, res) {
    req.models.News.find({
        newstype: "社会"
    }, function(err, News) {
        res.json(News);
    });

});
//科技
app.post('/tech', multipart(), function(req, res) {
    req.models.News.find({
        newstype: "科技"
    }, function(err, News) {
        res.json(News);
    });

});
//女人
app.post('/women', multipart(), function(req, res) {
    req.models.News.find({
        newstype: "女人"
    }, function(err, News) {
        res.json(News);
    });

});
//监听3000端口
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
