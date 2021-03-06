
/* eslint global-require: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import Result from '../src';
import Icon from '@gag/icon';
import WhiteSpace from '@gag/white-space';

const ResultExample = () => (<div className="result-example">
  <div className="sub-title">支付成功</div>
  <Result
    img={<Icon type={require('./alipay.svg')} className="icon" />}
    title="支付成功"
    message={<div><div style={{ fontSize: '0.72rem', color: '#000', lineHeight: 1 }}>998.00</div><del>1098元</del></div>}
  />
  <WhiteSpace />
  <div className="sub-title">验证成功</div>
  <Result
    img={<Icon type="check-circle" className="icon" style={{ fill: '#1F90E6' }} />}
    title="验证成功"
    message="所提交内容已成功完成验证"
  />
  <WhiteSpace />
  <div className="sub-title">支付失败</div>
  <Result
    img={<Icon type="cross-circle-o" className="icon" style={{ fill: '#F13642' }} />}
    title="支付失败"
    message="所选银行卡余额不足"
  />
  <WhiteSpace />
  <div className="sub-title">等待处理</div>
  <Result
    img={<Icon type={require('./waiting.svg')} className="icon" />}
    title="等待处理"
    message="已提交申请，等待银行处理"
  />
  <WhiteSpace />
  <div className="sub-title">操作失败</div>
  <Result
    img={<Icon type={require('./notice.svg')} className="icon" />}
    title="无法完成操作"
    message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
  />
</div>);

ReactDOM.render(<ResultExample />, document.getElementById('sk-root'));
