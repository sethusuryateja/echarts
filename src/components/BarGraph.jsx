import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import moment from 'moment-timezone';

function BarGraph() {

    var dataShadow = [];
    var dataAxis = [1593734400,1593993600, 1594166400, 1594252800 ]

    var dataAxisV2 = [];
    var data = [];
    dataAxis.forEach(e => {
        dataAxisV2.push(moment(e*1000).utc().format('DD-MMM'))
        data.push([moment(e*1000).utc().format('DD-MMM'), Math.random()*100]);
    });
    console.log('dataAxisV2', dataAxisV2, data);


    const getOption = () => ({
        title: {
            text: 'Bar Graph',
            // subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
        },
        xAxis: {
            type: 'category',
            // nameGap: 47,
            axisLabel: {
                // inside: true,
                rotate: 90,
            }
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: data,
            type: 'bar'
        }],
        dataZoom: [
            {
                type: 'inside'
            }
        ], 
    });

    return (
      <ReactEcharts
        option={getOption()}
        notMerge={true}
        lazyUpdate={true}
        style={{height: '300px', width: '300px'}}
      />
    );
}

export default BarGraph
