!function () {
    // 导航栏滚动变化
    var view = View('#topNavBar')

    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
            if (window.scrollY > 0) {
                this.active()
            } else {
                this.deactive()
            }
        },
        bindEvents: function () {
            var view = this.view
            window.addEventListener('scroll', function (x) {
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            }.bind(this))  // 如果用箭头函数，就不用绑this了

            // 移动端导航
            $(".navMobile").on('click',function(){
                $("#menu").slideToggle()
                $(document).one('click', function(){
                    $("#menu").slideUp()
                })
                $(document).one('scroll', function(){
                    $("#menu").slideUp()
                })
            })
            $(".topNavBar-inner").on('click', function(e){
                e.stopPropagation()
            })
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        deactive: function () {
            this.view.classList.remove('sticky')
        },
    }

    controller.init(view)
}.call()

