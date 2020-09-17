<template>
  <highcharts ref="chart" :options="chartOptions"></highcharts>
</template>

<script>
export default {
  name: 'ChartColumn',
  data: function () {
    return {
      points: [
        [
          2015,
          1200.09,
        ],
        [
          2016,
          53.61,
        ],
        [
          2017,
          55.53,
        ],
        [
          2018,
          54.34,
        ],
        [
          2019,
          55.54,
        ],
      ],
    };
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: 'column',
          backgroundColor: '#EDEDED',
        },
        colors: [ '#055F24' ],
        legend: {
          enabled: false,
        },
        tooltip: {
          useHTML: true,
          backgroundColor: 'transparent',
          shadow: false,
          borderRadius: 0,
          formatter: function () {
            return `<div>
                      <span style="font-family: 'Source Sans Pro', sans-serif; font-size: 14px; line-height: 18px;color: #055F24; text-align: center;">${ this.y }$</span>

                  </div>`;
          },
        },
        yAxis: {
          title: false,
          max: this.maxValueToOptions,
        },
        title: false,
        plotOptions: {
          column: {
            grouping: false,
            shadow: false,
          },
        },
        series: [
          {
            type: 'column',
            data: this.points,
          },
        ],
      };
    },
    maxValueToOptions() {
      const numbers = this.points.map(point => Math.ceil(point[1])),
        maxValue = Math.max.apply(null, numbers);
      
      return maxValue * .2 + maxValue;
    },
  },
  
  mounted() {
    console.log('Hello'); // FIXME: Delete before push
    
    const hh = [
      [
        2015,
        54.09,
      ],
      [
        2016,
        53.61,
      ],
      [
        2017,
        55.53,
      ],
      [
        2018,
        54.34,
      ],
      [
        2019,
        55.54,
      ],
    ].map(item => Math.ceil(item[1])); // FIXME: Delete before push);
    
    console.log(Math.max.apply(null, hh) * .20); // FIXME: Delete before push
    
  },
};
</script>

<style>
.highcharts-credits {
  display: none;
}
</style>