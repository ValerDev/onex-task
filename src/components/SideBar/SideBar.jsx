import React from 'react';
import s from './SideBar.module.scss';
import logo from '../../assets/images/logo.png';
import {
  BarChartOutlined,
  LineChartOutlined,
  SettingOutlined,
  ShoppingOutlined,
  SolutionOutlined,
} from '@ant-design/icons';

export const SideBar = () => {
  return (
    <div className={s.sideBar}>
      <div className={s.items}>
        <img src={logo} alt="logo" className={s.logo} />
        <BarChartOutlined className={s.icon} />
        <LineChartOutlined className={s.icon} />
        <ShoppingOutlined className={s.icon} />
        <SolutionOutlined className={s.icon} />
      </div>
      <div className={s.sideBarFooter}>
        <div className={s.avatar}></div>
        <SettingOutlined className={s.icon} />
      </div>
    </div>
  );
};
