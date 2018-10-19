initScrollReveal('.myCard')
initScrollReveal('.skills')
initScrollReveal('.portfolio')
initScrollReveal('.message')

function initScrollReveal(e){
    ScrollReveal().reveal(e, {
        // 动画的时长
        duration: 300,
        // 延迟时间
        delay: 150,
        // 动画开始的位置，'bottom', 'left', 'top', 'right'
        origin: 'bottom',
        // 回滚的时候是否再次触发动画
        reset: true,
        // 在移动端是否使用动画
        mobile: false,
        // 滚动的距离，单位可以用%，rem等
        distance: '10%',
        // 其他可用的动画效果
        opacity: 0.001,
        easing: 'linear',
        scale: 0.9,
      });
}