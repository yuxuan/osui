import React from 'react';
import Button from '@osui/button';
import KEYCODE from './KeyCode';

class GoInput extends React.Component {
    state = {
        goInputText: '',
    };

    getValidValue() {
        const {goInputText} = this.state;
        // eslint-disable-next-line no-restricted-globals
        return !goInputText || isNaN(goInputText) ? undefined : Number(goInputText);
    }

    handleChange = e => {
        this.setState({
            goInputText: e.target.value,
        });
    };

    handleBlur = e => {
        const {goButton, quickGo, rootPrefixCls} = this.props;
        const {goInputText} = this.state;
        if (goButton || goInputText === '') {
            return;
        }
        this.setState({
            goInputText: '',
        });
        if (
            e.relatedTarget
      && (e.relatedTarget.className.indexOf(`${rootPrefixCls}-item-link`) >= 0
        || e.relatedTarget.className.indexOf(`${rootPrefixCls}-item`) >= 0)
        ) {
            return;
        }
        quickGo(this.getValidValue());
    };

    go = e => {
        const {goInputText} = this.state;
        if (goInputText === '') {
            return;
        }
        if (e.keyCode === KEYCODE.ENTER || e.type === 'click') {
            this.setState({
                goInputText: '',
            });
            this.props.quickGo(this.getValidValue());
        }
    };

    render() {
        const {
            locale,
            rootPrefixCls,
            quickGo,
            goButton,
            disabled,
            size,
        } = this.props;
        const {goInputText} = this.state;
        const prefixCls = `${rootPrefixCls}-options`;
        let goInput = null;
        let gotoButton = null;

        if (quickGo) {
            if (goButton) {
                gotoButton =
          typeof goButton === 'boolean' ? (
              <Button
                  size={size}
                  type="button"
                  onClick={this.go}
                  onKeyUp={this.go}
                  disabled={disabled}
                  className={`${prefixCls}-quick-jumper-button osui-pagination-go-button`}
              >
                  {locale.jump_to_confirm}
              </Button>
          ) : (
              <span onClick={this.go} onKeyUp={this.go}>
                  {goButton}
              </span>
          );
            }
            goInput = (
                <div className={'osui-pagination'}>
                    <div className={`${prefixCls}-quick-jumper`}>
                        {locale.jump_to}
                        <input
                            disabled={disabled}
                            type="text"
                            value={goInputText}
                            onChange={this.handleChange}
                            onKeyUp={this.go}
                            onBlur={this.handleBlur}
                            aria-label={locale.page}
                        />
                        {locale.page}
                        {gotoButton}
                    </div>
                </div>
            );
        }

        return goInput;
    }
}

export default GoInput;
