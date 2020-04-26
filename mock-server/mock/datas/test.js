let Mock = require('mockjs')

module.exports = {
    test: Mock.mock({
        "status": 200,
        "msg": "test",
        "data": {
            'table|5': [{
                id: '@id()',
                title: '@cname()',
                customer_name_account: "@cname()",
                agent_name: "@cname()",
                submit_time: "@date()",
                status: 1,
                image: "https://resource.smartisan.com/resource/b13d4f5330d059de7acba589342ebf62.png?x-oss-process=image/resize,w_609/format,jpg/quality,Q_100"
            }],
            page: {
                current: 1,
                total: 100
            },
            form: {
                id: '@id()',
                keyword: ['很纠结', '啦啦啦', '得到'],
                status: 1
            }
        }
    })
}
