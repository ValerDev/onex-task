import React from 'react';
import s from './QuantityWeightSelects.module.scss';
import { Select } from 'antd';
import { quantityWeight } from './data';

export const QuantityWeightSelects = () => {
  return (
    <div className={s.quantityWeightSelects}>
      <Select
        defaultValue="quantity"
        style={{ width: 150 }}
        options={quantityWeight}
      />
    </div>
  );
};
