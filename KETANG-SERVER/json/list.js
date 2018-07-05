let ary=[
    {
        'pic':'http://img3m0.ddimg.cn/64/6/23990140-1_h_6.jpg',
        'name':'《正面管教》修订版',
        'price':'￥22.40',
        'heat':'200669评价'
    },
    {
        'pic':'http://img3m0.ddimg.cn/64/6/23990140-1_h_6.jpg',
        'name':'《正面管教》修订版',
        'price':'￥22.40',
        'heat':'200669评价'
    },
    {
        'pic':'http://img3m9.ddimg.cn/6/18/25106109-1_h_2.jpg',
        'name':'猎人笔记（教育部新编语文教材指定阅读书系）',
        'price':'￥24.70',
        'heat':'1475评价'
    },
    {
        'pic':'http://img3m7.ddimg.cn/1/1/23670307-1_h_1.jpg',
        'name':'儿童时间管理训练手册——30天让孩子的学习更高效',
        'price':'￥25.20',
        'heat':'35712评价'
    },
    {
        'pic':'http://img3m8.ddimg.cn/67/15/25167748-1_h_12.jpg',
        'name':'大冰“江湖故事”系列（共4册）我不+好吗好的+阿弥陀佛么么哒+乖 摸摸头',
        'price':'￥82.50',
        'heat':'238504评价'
    },
    {
        'pic':'http://img3m4.ddimg.cn/21/22/25245714-1_h_1.jpg',
        'name':'听什么歌都像在唱自己',
        'price':'￥29.80',
        'heat':'30123评价'
    },
    {
        'pic':'http://img3m0.ddimg.cn/7/35/25206100-1_h_6.jpg',
        'name':'知更鸟女孩4末日风暴（媲美《哈利·波特》《权力的游戏》的史诗经典系列。当死亡的末日风暴残酷来袭，谁的灵魂能够惊险逃脱？）',
        'price':'￥35.00',
        'heat':'8469评价'
    },
    {
        'pic':'http://img3m3.ddimg.cn/81/20/25194393-1_h_8.jpg',
        'name':'送你一颗子弹',
        'price':'￥98.80',
        'heat':'465469评价'
    },
    {
        'pic':'http://img3m1.ddimg.cn/51/7/23964981-1_h_5.jpg',
        'name':'自在独行,贾平凹的独行世界',
        'price':'￥28.20',
        'heat':'87546评价'
    },
    {
        'pic':'http://img3m4.ddimg.cn/49/31/23683324-1_h_1.jpg',
        'name':'任溶溶系列 没头脑和不高兴（注音版 共5册）',
        'price':'￥44.70',
        'heat':'875654评价'
    }
];
let vueN = 0,
    reactN = 0,
    weixinN = 0;

let result = [];
for (let i = 1; i < 100; i++) {
    let n = Math.round(Math.random() * 2),
        item = JSON.parse(JSON.stringify(ary[n])),
        m = 0;
    item = {id: i, ...item};
    switch (item.type) {
        case 'vue':
            ++vueN;
            m = vueN;
        case 'react':
            ++reactN;
            m = reactN;
        default:
            ++weixinN;
            m = weixinN;
    }
    m = (m < 100 && m >= 10) ? '0' + m : (m < 10 ? '00' + m : m);
    item.name = item.name + '[第' + m + '讲]';
    result.push(item);
}
require('../utils/promiseFS').writeFile('./course.json', result);