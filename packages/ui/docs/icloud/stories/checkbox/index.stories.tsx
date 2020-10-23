import React from 'react';
import Checkbox from '@osui/checkbox';

const Group = Checkbox.Group;

export default {
    title: '通过验收/Checkbox 多选框',
};

export const Demo = () => {
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    const plainOptions = ['Apple', 'Pear', 'Orange'];
    const options = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
    ];
    const optionsWithDisabled = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange', disabled: false },
    ];
    return (
        <div style={{ padding: 30 }}>
            <p>基础示例</p>
            <Checkbox >Checkbox</Checkbox>
            <Checkbox defaultChecked >Checkbox</Checkbox>
            <Checkbox disabled>Checkbox</Checkbox>
            <Checkbox defaultChecked disabled>Checkbox</Checkbox>
            <p></p>
            <p>Checkbox组</p>
            <Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
            <br />
            <br />
            <Group options={options} defaultValue={['Pear']} onChange={onChange} />
            <br />
            <br />
            <Group
                options={optionsWithDisabled}
                disabled
                defaultValue={['Apple']}
                onChange={onChange}
            />
        </div>);
};
