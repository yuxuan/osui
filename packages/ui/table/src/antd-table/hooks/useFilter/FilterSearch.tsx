import * as React from 'react';
import { IconSearchOutlined } from '@osui/icons-icloud';
import Input from 'antd/es/input';
import type { TableLocale, FilterSearchType } from '../../interface';

interface FilterSearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterSearch: FilterSearchType;
  tablePrefixCls: string;
  locale: TableLocale;
}

const FilterSearch: React.FC<FilterSearchProps> = ({
  value,
  onChange,
  filterSearch,
  tablePrefixCls,
  locale,
}) => {
  if (!filterSearch) {
    return null;
  }
  return (
    <div className={`${tablePrefixCls}-filter-dropdown-search`}>
      <Input
        prefix={<IconSearchOutlined />}
        placeholder={locale.filterSearchPlaceholder}
        onChange={onChange}
        value={value}
        // for skip min-width of input
        htmlSize={1}
        className={`${tablePrefixCls}-filter-dropdown-search-input`}
      />
    </div>
  );
};

export default FilterSearch;
