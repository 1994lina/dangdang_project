let ary=[
    {
        'pic':'http://img3m7.ddimg.cn/28/24/25123357-1_h_3.jpg',
        'name':'寂静的春天 人教统编教材八年级上推荐阅读（全译精装典藏版 新课标必读 朱永新及各省级教育专家审订推荐）',
        'price':'￥24.50',
        'declare':'百年商务 品质保证；优质纸张、环保印刷；是一套适合学生和家长共读的传世经典',
        'heat':'2669评价',
        'pricing':'￥28.80'

    },
    {
        'pic':'http://img3m7.ddimg.cn/74/2/25103207-1_h_6.jpg',
        'name':'星星离我们有多远（卞毓麟 教育部新编初中语文教材指定阅读图书）八年级上册自主阅读推荐书',
        'declare':'全新修订版   教育部新编初中语文教材八年级（上）指定阅读图书 荣获第二届全国优秀科普作品奖',
        'price':'￥22.70',
        'heat':'200669评价',
        'pricing':'￥30.80'
    },
    {
        'pic':'http://img3m8.ddimg.cn/61/18/25100818-1_h_3.jpg',
        'name':'红星照耀中国   (团购更优惠 电话：010-57993149）八年级上册必读',
        'declare':'教育部八年级（上）语文教科书名著导读指定书目',
        'price':'￥24.70',
        'heat':'1475评价',
        'pricing':'￥32.40'
    },
    {
        'pic':'http://img3m9.ddimg.cn/87/27/25161729-1_h_3.jpg',
        'name':'星星离我们有多远 人教统编教材八年级上推荐阅读（全译精装典藏版 新课标必读 朱永新及各省级教育专家联袂推荐）',
        'price':'￥25.20',
        'declare':'百年商务 品质保证；优质纸张、环保印刷；是一套适合学生和家长共读的传世经典',
        'heat':'35712评价',
        'pricing':'￥28.00'
    },
    {
        'pic':'http://img3m7.ddimg.cn/60/33/23992017-1_h_9.jpg',
        'name':'三国演义（新课标 精装四大名著 足本典藏 无障碍阅读 注音解词释疑）',
        'price':'￥82.50',
        'declare':'通过对经典的价值阅读，树立学生正确的价值观，培养一生有用的品质 读三国演义培养进取、忠诚、承担的品种',
        'heat':'238504评价',
        'pricing':'￥88.20'
    },
    {
        'pic':'http://img3m4.ddimg.cn/52/4/25099324-1_h_3.jpg',
        'name':'湘行散记 人教统编教材七年级上推荐阅读（新课标必读 无障碍阅读素质版 朱永新及各省级教育专家审订推荐）',
        'price':'￥29.80',
        'declare':'百年商务 品质保证；著名翻译家团队；优质纸张、环保印刷；是一套值得收藏的名著经典。',
        'heat':'30123评价',
        'pricing':'￥32.40'
    },
    {
        'pic':'http://img3m6.ddimg.cn/3/15/25106106-1_h_3.jpg',
        'name':'镜花缘（教育部新编语文教材指定阅读书系）',
        'price':'￥35.00',
        'declare':'足本典藏注音注释无障碍阅读 中国古代奇幻小说的鸿篇巨著教育部新编语文教材指定阅读图书。',
        'heat':'8469评价',
        'pricing':'￥42.10'
    },
    {
        'pic':'http://img3m9.ddimg.cn/47/21/23904389-1_h_2.jpg',
        'name':'昆虫记',
        'price':'￥98.80',
        'declare':'（名家精译 传世典藏）',
        'heat':'465469评价',
        'pricing':'￥102.7'
    },
    {
        'pic':'http://img3m6.ddimg.cn/98/17/23767226-1_h_3.jpg',
        'name':'骆驼祥子 人教统编教材七年级下推荐必读（精装典藏版 新课标必读 朱永新及54位省级教育专家联袂推荐）',
        'price':'￥28.20',
        'declare':'通过对经典的价值阅读，树立学生正确的价值观，培养一生有用的品质 读三国演义培养进取、忠诚、承担的品种',
        'heat':'87546评价',
        'pricing':'￥34.80'
    },
    {
        'pic':'http://img3m7.ddimg.cn/4/16/25106107-1_h_2.jpg',
        'name':'居里夫人传（教育部新编语文教材指定阅读书系）',
        'price':'￥44.70',
        'declare':'教育部新编语文教材指定阅读图书，北京大学中文系教授，全国中学语文教学研究会会长温儒敏强力推荐',
        'heat':'875654评价',
        'pricing':'￥56.60'
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