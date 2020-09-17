<template>
  <div>
    <highcharts ref="chart" :constructorType="'stockChart'" :options="chartOptions" class="hc"></highcharts>
  </div>
</template>

<script>
export default {
  name: 'Chart',
  data() {
    return {
      months: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      chartOptions: {
        chart: {
          backgroundColor: '#EDEDED',
        },
        colors: [ '#055F24' ],
        height: '4px',
        navigator: {
          enabled: false,
        },
        scrollbar: { enabled: false },
        rangeSelector: {
          enabled: false,
        },
        selectionMarkerFill: 'rgba(51,92,1,0.25)',
        tooltip: {
          useHTML: true,
          backgroundColor: 'transparent',
          shadow: false,
          borderWidth: 0,
          borderRadius: 0,
          formatter: function () {
            return `<div>
                      <span style="font-size: 18px; line-height: 23px; background-color:#055F24; color: #fff; padding: 0 5px;">${ this.y }$</span>
                      <span style="font-size: 18px; line-height: 23px; background-color:#055F24; color: #fff; padding: 0 5px;">${ new Date(
              this.x).toLocaleDateString() }</span>
                    </div>`;
          },
        },
        yAxis: {
          opposite: false,
          min: 0,
        },
        xAxis: {
          labels: {
            formatter: ({ value }) => this.months[new Date(value).getMonth()],
          },
        },
        series: [
          {
            data: [
              [
                1539178200000,
                54.09,
              ],
              [
                1539264600000,
                53.61,
              ],
              [
                1539351000000,
                55.53,
              ],
              [
                1539610200000,
                54.34,
              ],
              [
                1539696600000,
                55.54,
              ],
              [
                1539783000000,
                55.3,
              ],
              [
                1539869400000,
                54.01,
              ],
              [
                1539955800000,
                54.83,
              ],
              [
                1540215000000,
                55.16,
              ],
              [
                1540301400000,
                55.68,
              ],
              [
                1540387800000,
                53.77,
              ],
              [
                1540474200000,
                54.95,
              ],
              [
                1540560600000,
                54.08,
              ],
              [
                1540819800000,
                53.06,
              ],
              [
                1540906200000,
                53.33,
              ],
              [
                1540992600000,
                54.72,
              ],
              [
                1541079000000,
                55.56,
              ],
              [
                1541165400000,
                51.87,
              ],
              [
                1541428200000,
                50.4,
              ],
              [
                1541514600000,
                50.94,
              ],
              [
                1541601000000,
                52.49,
              ],
              [
                1541687400000,
                52.12,
              ],
              [
                1541773800000,
                51.12,
              ],
              [
                1542033000000,
                48.54,
              ],
              [
                1542119400000,
                48.06,
              ],
              [
                1542205800000,
                46.7,
              ],
              [
                1542292200000,
                47.85,
              ],
              [
                1542378600000,
                48.38,
              ],
              [
                1542637800000,
                46.47,
              ],
              [
                1542724200000,
                44.24,
              ],
              [
                1542810600000,
                44.19,
              ],
              [
                1542983400000,
                43.07,
              ],
              [
                1543242600000,
                43.65,
              ],
            
            ],
          },
        ],
      },
    }
      ;
  },
};
</script>

<style>

</style>