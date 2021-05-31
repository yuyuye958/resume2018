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
            { name: 'JavaScript', max: 100 },
            { name: 'Vue', max: 100 },
            { name: 'AngularJS 1.x', max: 100 },
            { name: 'React', max: 100 },
            { name: 'JQuery', max: 100 },
            { name: 'Node.js', max: 100 }
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
                value: [90, 90, 80, 70, 90, 70],
                name: '目前的水平'
            },
            {
                value: [98, 95, 85, 90, 95, 90],
                name: '期望将来的进步',
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
