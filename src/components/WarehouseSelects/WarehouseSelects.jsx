import React from 'react';
import s from './WarehouseSelects.module.scss';
import { Select, Space } from 'antd';
import { flags } from '../../helpers/flags';
import { icons } from '../../helpers/icons';
import { CountriesMultiselect } from '../CountriesMultiselect/CountriesMultiselect';
import { destinations, dispatches, quantityWeight, statuses } from './data';

export const WarehouseSelects = () => {
  return (
    <div className={s.warehouseSelects}>
      <CountriesMultiselect />
      <Select
        defaultValue="allStatuses"
        style={{ width: 150 }}
        options={statuses}
      />
      <Select
        defaultValue="allDestinations"
        style={{ width: 150 }}
        options={destinations}
        optionRender={(option) => (
          <Space>
            {option.data.value !== 'allDestinations' && (
              <img
                src={flags[option.data.value]}
                alt={option.data.value}
                width={'20px'}
              />
            )}
            <span>{option.data.label}</span>
          </Space>
        )}
      />
      <Select
        defaultValue="allDispatches"
        optionRender={(option) => (
          <Space>
            {option.data.value !== 'allDispatches' && (
              <img
                src={icons[option.data.value]}
                alt={option.data.value}
                width={'20px'}
              />
            )}
            <span>{option.data.label}</span>
          </Space>
        )}
        style={{ width: 150 }}
        options={dispatches}
      />
      <Select
        defaultValue="quantity"
        style={{ width: 150 }}
        options={quantityWeight}
      />
    </div>
  );
};
