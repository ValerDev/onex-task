import React, { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { chartData } from './data';

export const WarehouseReportChart = (props) => {
  useLayoutEffect(() => {
    const root = am5.Root.new('warehouseReportChart');

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        wheelY: 'zoomX',
        layout: root.verticalLayout,
        maxTooltipDistance: 0,
      })
    );

    // Create Y-axis
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        extraTooltipPrecision: 1,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create X-Axis
    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: 'day', count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 20,
        }),
      })
    );

    // Create series
    function createSeries(name, field) {
      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: field,
          valueXField: 'date',
          tooltip: am5.Tooltip.new(root, {}),
        })
      );

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 5,
            fill: series.get('fill'),
          }),
        });
      });

      series.strokes.template.set('strokeWidth', 2);

      series
        .get('tooltip')
        .label.set('text', '[bold]{name}[/]\n{valueX.formatDate()}: {valueY}');
      chart
        .get('colors')
        .set('colors', [
          am5.color(0xed143d),
          am5.color(0x673ab7),
          am5.color(0x8bc34a),
          am5.color(0x607d8b),
          am5.color(0x2196f3),
          am5.color(0xff9800),
        ]);
      series.data.setAll(chartData);
    }

    const legend = chart.children.push(
      am5.Legend.new(root, {
        nameField: 'country',
        fillField: 'color',
        strokeField: 'color',
        centerX: am5.percent(50),
        x: am5.percent(50),
      })
    );

    legend.data.setAll(chartData);

    createSeries('Series #1', 'value1');
    createSeries('Series #2', 'value2');
    createSeries('Series #3', 'value3');
    createSeries('Series #4', 'value4');
    createSeries('Series #5', 'value5');
    createSeries('Series #6', 'value6');
    createSeries('Series #7', 'value7');

    // Add cursor
    chart.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        behavior: 'zoomXY',
        xAxis: xAxis,
      })
    );

    xAxis.set(
      'tooltip',
      am5.Tooltip.new(root, {
        themeTags: ['axis'],
      })
    );

    yAxis.set(
      'tooltip',
      am5.Tooltip.new(root, {
        themeTags: ['axis'],
      })
    );
    root.current = root;

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      id="warehouseReportChart"
      style={{ width: '100%', height: '500px' }}
    ></div>
  );
};
