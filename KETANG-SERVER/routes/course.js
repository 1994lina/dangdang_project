const express = require('express'),
    route = express.Router();

route.get('/banner', (req, res) => {
    //=>我就是把所有课程中的最后三条数据做为轮播图展示
    let data = req.courseDATA.reverse().slice(0, 3);
    res.send({
        code: 0,
        msg: 'OK!',
        data
    });
});
route.get('/banner1', (req, res) => {
    //=>我就是把所有课程中的最后三条数据做为轮播图展示
    res.send({
        code: 0,
        msg: 'OK!',
        data: req.banner1DATA
    });
});
route.get('/banner2', (req, res) => {
    //=>我就是把所有课程中的最后三条数据做为轮播图展示
    res.send({
        code: 0,
        msg: 'OK!',
        data: req.banner2DATA
    });
});
route.get('/banner3', (req, res) => {
    //=>我就是把所有课程中的最后三条数据做为轮播图展示
    res.send({
        code: 0,
        msg: 'OK!',
        data: req.banner3DATA
    });
});
route.get('/listname', (req, res) => {
    //=>我就是把所有课程中的最后三条数据做为轮播图展示
    res.send({
        code: 0,
        msg: 'OK!',
        data: req.listnameDATA
    });
});
route.get('/info', (req, res) => {
    //=>客户端会传一个课程ID进来，我们在所有课程中找到和ID相同的信息，返回
    let {courseID} = req.query;//=>GET请求问号传递信息都在REQ.QUERY上呢
    courseID = parseFloat(courseID);
    let item = req.courseDATA.find(item => {
        return parseFloat(item.id) === courseID;
    });
    if (item) {
        res.send({
            code: 0,
            msg: 'OK!',
            data: item
        });
        return;
    }
    res.send({
        code: 1,
        msg: 'NO!',
        data: null
    });
});

route.get('/list', (req, res) => {
    //=>接收客户端传递的参数值，不传的给默认值：limit每页展示条数，page是第几页，type是筛选的类型
    let {limit = 10, page = 1} = req.query;
    limit = parseFloat(limit);
    page = parseFloat(page);
    //=>分页处理：就是在所有筛选出来的数据中，找到某一页的那几条数据，然后就把这几条返回给客户端即可
    let total = Math.ceil(req.courseDATA.length / limit),//=>总页数
        result = [];
    if (page <= total) {
        /*
         *  999条  每页10条(limit)  =>总页数100页
         *    page=1  返回索引 0~9
         *    page=2  返回索引 10~19
         *    page=n  返回索引 (n-1)*limit ~ n*limit-1
         */
        for (let i = (page - 1) * limit; i <= (page * limit - 1); i++) {
            let item = req.courseDATA[i];
            if (!item) break;
            result.push(item);
        }
    }
    res.send({
        code: 0,
        msg: 'OK!',
        total,
        limit,
        page,
        data: result
    });
});

module.exports = route;