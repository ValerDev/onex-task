import React, { useLayoutEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { chartData } from './data';

export const QuantityWeightsChart = (props) => {
  useLayoutEffect(() => {
    const root = am5.Root.new('quantityWeightsChart');

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'panX',
        wheelY: 'zoomX',
        layout: root.verticalLayout,
      })
    );

    const xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      cellStartLocation: 0.2,
      cellEndLocation: 0.8,
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'country',
        renderer: xRenderer,
        bullet: function (root, axis, dataItem) {
          return am5xy.AxisBullet.new(root, {
            location: 0.5,
            sprite: am5.Picture.new(root, {
              width: 32,
              height: 32,
              centerY: am5.p50,
              centerX: am5.p50,
              src: dataItem.dataContext.icon,
            }),
          });
        },
      })
    );

    xRenderer.grid.template.setAll({
      location: 1,
    });

    xRenderer.labels.template.setAll({
      paddingTop: 20,
    });

    xAxis.data.setAll(chartData);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1,
        }),
      })
    );

    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        categoryXField: 'country',
      })
    );

    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 0.7,
        sprite: am5.Label.new(root, {
          text: '70',
          fill: '#5dba2f',
          centerY: am5.percent(50),
          centerX: am5.percent(50),
          populateText: true,
        }),
      });
    });

    series.columns.template.setAll({
      tooltipText: '{categoryX}: {valueY}',
      tooltipY: 0,
      strokeOpacity: 0,
      width: am5.percent(100),
      templateField: 'columnSettings1',
    });

    series.data.setAll(chartData);

    series.appear();
    chart.appear(1000, 100);

    const series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value2',
        categoryXField: 'country',
      })
    );

    series2.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 0.7,
        sprite: am5.Label.new(root, {
          text: '70',
          fill: root.interfaceColors.get('alternativeText'),
          centerY: am5.percent(50),
          centerX: am5.percent(50),
          populateText: true,
        }),
      });
    });

    series2.columns.template.setAll({
      tooltipText: '{categoryX}: {valueY}',
      tooltipY: 0,
      strokeOpacity: 0,
      width: am5.percent(100),
      templateField: 'columnSettings2',
    });

    series2.data.setAll(chartData);

    series2.appear();
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      id="quantityWeightsChart"
      style={{ width: '100%', height: '300px' }}
    ></div>
  );
};
