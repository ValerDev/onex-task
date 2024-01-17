import { Content } from 'antd/es/layout/layout';
import { WarehouseReportChart } from '../WarehouseReportChart/WarehouseReportChart';
import s from './Dashboard.module.scss';
import { QuantityWeightsChart } from '../QuantityWeightsChart/QuantityWeightsChart';
import { DateTabs } from '../DateTabs/DateTabs';
import { WarehouseSelects } from '../WarehouseSelects/WarehouseSelects';
import { QuantityWeightSelects } from '../QuantityWeightSelects/QuantityWeightSelects';

export const Dashboard = () => {
  return (
    <div className={s.dashboard}>
      <h1>Dashboard</h1>
      <DateTabs />
      <Content
        style={{
          margin: '24px 0px',
          borderRadius: '12px',
          padding: 24,
          minHeight: 280,
          background: '#ffffff',
        }}
      >
        <h2>Warehouse report</h2>
        <WarehouseSelects />
        <WarehouseReportChart />
      </Content>
      <Content
        style={{
          margin: '24px 0px',
          borderRadius: '12px',
          padding: 24,
          minHeight: 280,
          background: '#ffffff',
        }}
      >
        <h2>Quantity and weights by country</h2>
        <QuantityWeightSelects />
        <QuantityWeightsChart />
      </Content>
    </div>
  );
};
