var myChart = echarts.init(document.getElementById('radar'), 'light');

option = {
    title: {

    },
    tooltip: {},
    legend: {
        data: ['目前的水平', '目标工作一年后达到的水平'],
        top: 10
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#7EC0EE',
                borderRadius: 4,
                padding: [5, 6]
            }
        },
        indicator: [
            { name: 'HTML 5 & CSS 3', max: 100 },
            { name: 'jQuery', max: 100 },
            { name: 'Vue.js', max: 100 },
            { name: 'JavaScript', max: 100 },
            { name: 'Node.js', max: 100 },
            { name: '移动端', max: 100 }
        ],
        nameGap: 10,
        center: ['50%', '50%'],
    },
    series: [{
        name: '现在 vs 目标',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [85, 85, 80, 80, 60, 80],
                name: '目前的水平'
            },
            {
                value: [95, 90, 90, 90, 80, 90],
                name: '目标工作一年后达到的水平',
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                }
            }
        ]
    }]
};

myChart.setOption(option);