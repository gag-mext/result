/* tslint:disable:jsx-no-multiline-js */
import '../style';
import React from 'react';
import Button from '@gag/button';
import classNames from 'classnames';


class Result extends React.Component {
  render() {
    const { prefixCls, className, img, imgUrl, title, message, buttonText, buttonClick, buttonType } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: className,
    });

    let imgContent: any = null;
    if (img) {
      imgContent = <div className={`${prefixCls}-pic`}>{img}</div>;
    } else if (imgUrl) {
      imgContent = <div className={`${prefixCls}-pic`} style={{ backgroundImage: `url(${imgUrl})` }} />;
    }

    return (
      <div className={wrapCls}>
        {imgContent}
        {title ? <div className={`${prefixCls}-title`}>{title}</div> : null }
        {message ? <div className={`${prefixCls}-message`}>{message}</div> : null }
        {buttonText ? <div className={`${prefixCls}-button`}>
          <Button type={buttonType} onClick={buttonClick}>{buttonText}</Button>
        </div> : null }
      </div>
    );
  }
}
Result.defaultProps = {
  prefixCls: 'am-result',
  buttonType: null,
  buttonClick: () => {},
};
Result.propTypes = {

  imgUrl: React.PropTypes.string,
  img: React.PropTypes.node,
  title: React.PropTypes.node,
  message: React.PropTypes.node,
  buttonText: React.PropTypes.string,
  buttonType:React.PropTypes.oneOf(['primary','ghost']),
  buttonClick:React.PropTypes.func,
  /** below web only */
  prefixCls: React.PropTypes.string,
  className: React.PropTypes.string,
};
Result.displayName = "Result";
module.exports=Result;
