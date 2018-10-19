window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        // 初始化
        init: function () {
            var APP_ID = 'L52drH4CI0UGr3r1GPWjm4bb-gzGzoHsz';
            var APP_KEY = 's4rmnskDPuOmmzTMws3t3pV6';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        // 获取数据
        fetch: function () {
            var query = new AV.Query(resourceName);
            var now = new Date();
            query.lessThanOrEqualTo('createdAt', now);//查询今天之前创建的 Todo
            query.limit(10);// 最多返回 10 条结果
            query.descending('createdAt');
            return query.find()  // Promise 对象
        },
        // 存储数据
        save: function (object) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)
        }
    }
}