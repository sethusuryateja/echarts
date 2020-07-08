import React from 'react';
import ReactEcharts from 'echarts-for-react';
// import echarts from 'echarts';

function PieChart({ seriesData }) {

    let data = {
        seriesData: seriesData,
        // legendData: ['Mon', 'Tue'],
        // selected: [{'Mon': 1, 'Tue': 2}],
    };
    data.legendData = [];
    data.selected = [];
    seriesData.forEach((e, index) => {
        data.legendData.push(e.name);
        data.selected[e.name] = index;
    })
    console.log('data', data);

    const getOption = () => ({
        title: {
            text: 'Pie Chart',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: data.legendData,
    
            selected: data.selected
        },
        series: [
            {
                name: 'Alerts',
                type: 'pie',
                radius: '55%',
                center: ['40%', '50%'],
                data: data.seriesData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    });

    return (
      <ReactEcharts
        option={getOption()}
        notMerge={true}
        lazyUpdate={true}
        style={{height: '300px', width: '400px'}}
      />
    );
}

export default PieChart
