/* eslint react/prop-types: 0 */
import React from 'react';
import LOCALE from './zh_CN';
import Options from './Options';

export interface PaginationLocale {
  // Options.jsx
  items_per_page?: string;
  jump_to?: string;
  jump_to_confirm?: string;
  page?: string;

  // Pagination.jsx
  prev_page?: string;
  next_page?: string;
  prev_5?: string;
  next_5?: string;
  prev_3?: string;
  next_3?: string;
}

export interface PaginationData {
    className: string;
    selectPrefixCls: string;
    prefixCls: string;
    pageSizeOptions: string[] | number[];

    current: number;
    defaultCurrent: number;
    total: number;
    totalBoundaryShowSizeChanger?: number;
    pageSize: number;
    defaultPageSize: number;

    hideOnSinglePage: boolean;
    showSizeChanger: boolean;
    showLessItems: boolean;
    showPrevNextJumpers: boolean;
    showQuickJumper: boolean | object;
    showTitle: boolean;
    simple: boolean;
    disabled: boolean;

    locale: PaginationLocale;

    style: React.CSSProperties;

    selectComponentClass?: React.ComponentType<any> & {
        Option: React.ComponentType<any>;
    };
    prevIcon: React.ComponentType | React.ReactNode;
    nextIcon: React.ComponentType | React.ReactNode;
    jumpPrevIcon: React.ComponentType | React.ReactNode;
    jumpNextIcon: React.ComponentType | React.ReactNode;
}

export interface PaginationProps extends Partial<PaginationData> {
    onChange?: (page: number, pageSize: number) => void;
    onShowSizeChange?: (current: number, size: number) => void;
    itemRender?: (
      page: number,
      type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
      element: React.ReactNode,
    ) => React.ReactNode;
    showTotal?: (total: number, range: [number, number]) => React.ReactNode;
    size?: 'default' | 'small';
}

  interface PaginationState {
    current: number;
    currentInputValue: number;
    pageSize: number;
  }

  function isInteger(v: number) {
    const value = Number(v);
    return (
      // eslint-disable-next-line no-restricted-globals
      typeof value === 'number' &&
      !Number.isNaN(value) &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  }

function noop() {}

const defaultItemRender: PaginationProps['itemRender'] = (
  page,
  type,
  element,
) => {
  return element;
};

function calculatePage(
  p: number | undefined,
  state: {pageSize?: number},
  props: {total?: number},
) {
if (!state.pageSize || !props.total) return 0;
  const pageSize = typeof p === 'undefined' ? state.pageSize : p;
  return Math.floor((props.total - 1) / pageSize) + 1;
}

class PaginationSizeChange extends React.Component<PaginationProps, PaginationState> {
  static defaultProps = {
    defaultCurrent: 1,
    total: 0,
    defaultPageSize: 10,
    onChange: noop,
    className: '',
    selectPrefixCls: 'rc-select',
    prefixCls: 'rc-pagination',
    selectComponentClass: null,
    hideOnSinglePage: false,
    onShowSizeChange: noop,
    locale: LOCALE,
    itemRender: defaultItemRender,
    totalBoundaryShowSizeChanger: 50,
  };
  paginationNode = React.createRef<HTMLUListElement>();
  constructor(props: PaginationProps) {
    super(props);

    const hasOnChange = props.onChange !== noop;
    const hasCurrent = 'current' in props;
    if (hasCurrent && !hasOnChange) {
      // eslint-disable-next-line no-console
      console.warn(
        'Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.',
      );
    }

    let current = props.defaultCurrent;
    if ('current' in props) {
      // eslint-disable-next-line prefer-destructuring
      current = props.current;
    }

    let pageSize = props.defaultPageSize;
    if ('pageSize' in props) {
      // eslint-disable-next-line prefer-destructuring
      pageSize = props.pageSize;
    }

    current = Math.min(current as number, calculatePage(pageSize, {}, props));

    this.state = {
      current,
      currentInputValue: current,
      pageSize: pageSize as number,
    };
  }

  componentDidUpdate(_: PaginationProps, prevState: PaginationState) {
    // When current page change, fix focused style of prev item
    // A hacky solution of https://github.com/ant-design/ant-design/issues/8948
    const { prefixCls } = this.props;
    if (
      prevState.current !== this.state.current &&
      this.paginationNode.current
    ) {
      const lastCurrentNode =
        this.paginationNode.current.querySelector<HTMLInputElement>(
          `.${prefixCls}-item-${prevState.current}`,
        );
      if (lastCurrentNode && document.activeElement === lastCurrentNode) {
        lastCurrentNode?.blur?.();
      }
    }
  }

  static getDerivedStateFromProps(
    props: PaginationProps,
    prevState: PaginationState,
  ) {
    const newState: Partial<PaginationState> = {};

    if ('current' in props) {
      newState.current = props.current;

      if (props.current !== prevState.current) {
        newState.currentInputValue = newState.current;
      }
    }

    if ('pageSize' in props && props.pageSize !== prevState.pageSize) {
      let { current } = prevState;
      const newCurrent = calculatePage(props.pageSize, prevState, props);
      current = current > newCurrent ? newCurrent : current;

      if (!('current' in props)) {
        newState.current = current;
        newState.currentInputValue = current;
      }
      newState.pageSize = props.pageSize;
    }

    return newState;
  }

    isValid = (page: number) => {
        const { total } = this.props;
        if (!total) return false;
            return (
            isInteger(page) &&
            page !== this.state.current &&
            isInteger(total) &&
            total > 0
            );
    };

    shouldDisplayQuickJumper = () => {
        const { showQuickJumper, total } = this.props;
        const { pageSize } = this.state;
        if (!total) return false;
        if (total <= pageSize) {
            return false;
        }
        return showQuickJumper;
    };


    changePageSize = (size: number) => {
        let { current } = this.state;
        const newCurrent = calculatePage(size, this.state, this.props);
        current = current > newCurrent ? newCurrent : current;
        // fix the issue:
        // Once 'total' is 0, 'current' in 'onShowSizeChange' is 0, which is not correct.
        if (newCurrent === 0) {
        // eslint-disable-next-line prefer-destructuring
        current = this.state.current;
        }

        if (typeof size === 'number') {
        if (!('pageSize' in this.props)) {
            this.setState({ pageSize: size });
        }
        if (!('current' in this.props)) {
            this.setState({ current, currentInputValue: current });
        }
        }

        if (this.props.onShowSizeChange) {
            this.props.onShowSizeChange(current, size);
        }

        if ('onChange' in this.props && this.props.onChange) {
        this.props.onChange(current, size);
        }
    };

    getShowSizeChanger() {
        const { showSizeChanger, total, totalBoundaryShowSizeChanger } = this.props;
        if (typeof showSizeChanger !== 'undefined') {
        return showSizeChanger;
        }
        if (total && totalBoundaryShowSizeChanger) {
            return total > totalBoundaryShowSizeChanger;
        }
        return false;
    }

    handleChange = (page: number) => {
        const { disabled, onChange } = this.props;
        const { pageSize, current, currentInputValue } = this.state;
        if (this.isValid(page) && !disabled) {
            const currentPage = calculatePage(undefined, this.state, this.props);
            let newPage = page;
            if (page > currentPage) {
                newPage = currentPage;
            } else if (page < 1) {
                newPage = 1;
            }
            if (!('current' in this.props)) {
                this.setState({ current: newPage });
            }
            if (newPage !== currentInputValue) {
                this.setState({ currentInputValue: newPage });
            }
                if (onChange) {
                    onChange(newPage, pageSize);
                }
            return newPage;
        }
        return current;
    };

  render() {
    const {
        prefixCls,
        disabled,
        hideOnSinglePage,
        total,
        locale,
        showQuickJumper,
        simple,
        selectComponentClass,
        selectPrefixCls,
        pageSizeOptions,
        children,
        size,
    } = this.props;

    const { pageSize } = this.state;
    const goButton = showQuickJumper && (showQuickJumper as any).goButton;

    // When hideOnSinglePage is true and there is only 1 page, hide the pager
    if (hideOnSinglePage === true && total && total <= pageSize) {
      return null;
    }

    if (simple) {
        return null;
    }

    return (
        <Options
            size={size}
            disabled={!!disabled}
            locale={locale}
            rootPrefixCls={prefixCls as string}
            {...selectComponentClass? {selectComponentClass}:{}}
            selectPrefixCls={selectPrefixCls as string}
            changeSize={this.getShowSizeChanger() ? this.changePageSize : ()=>{}}
            pageSize={pageSize}
            pageSizeOptions={pageSizeOptions as Array<string | number>}
            quickGo={this.shouldDisplayQuickJumper() ? this.handleChange : () => {}}
            goButton={goButton || true}
        >
            {children}
        </Options>
    );
  }
}

export default PaginationSizeChange;

