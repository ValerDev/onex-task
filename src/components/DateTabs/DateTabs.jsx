import React, { useState } from 'react';
import './DateTabs.scss';
import { Radio, DatePicker } from 'antd';

import dayjs from 'dayjs';

export const DateTabs = () => {
  const [timeRange, setTimeRange] = useState('allTime');
  const dateFormat = 'MM/DD/YYYY';
  const { RangePicker } = DatePicker;

  const handleTabChange = (e) => {
    const { value } = e.target;
    setTimeRange(value);
  };

  return (
    <div className={'dateTabs'}>
      <Radio.Group
        onChange={handleTabChange}
        value={timeRange}
        style={{
          marginBottom: 8,
        }}
      >
        <Radio.Button value="allTime">All time</Radio.Button>
        <Radio.Button value="today">Today</Radio.Button>
        <Radio.Button value="thisWeek">This week</Radio.Button>
        <Radio.Button value="thisMonth">This month</Radio.Button>
        <Radio.Button value="thisYear">This year</Radio.Button>
      </Radio.Group>

      <RangePicker
        className="rangePicker"
        defaultValue={[
          dayjs('03/20/2015', dateFormat),
          dayjs('09/11/2019', dateFormat),
        ]}
        format={dateFormat}
      />
    </div>
  );
};
