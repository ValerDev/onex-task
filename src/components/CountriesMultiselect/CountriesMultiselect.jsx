import React from 'react';
import s from './CountriesMultiselect.module.scss';
import { Select, Space, Tag } from 'antd';
import { options } from './data';
import { flags } from '../../helpers/flags';

export const CountriesMultiselect = () => {
  const handleChange = () => {};

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        className={s.customTag}
      >
        <img src={flags[value]} alt={value} width={'15px'} />
        <span className={s.label}>{label}</span>
      </Tag>
    );
  };

  return (
    <Select
      mode="tags"
      placeholder="select one country"
      onChange={handleChange}
      optionLabelProp="label"
      className={s.countriesMultiselect}
      defaultValue={'USA'}
      maxTagCount={'responsive'}
      options={options}
      optionRender={(option) => (
        <Space>
          <img
            src={flags[option.data.value]}
            alt={option.data.value}
            width={'20px'}
          />
          <span>{option.data.label}</span>
        </Space>
      )}
      tagRender={tagRender}
    ></Select>
  );
};
