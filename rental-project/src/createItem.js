import React from 'react'
import { Input, DatePicker, InputNumber, Row, Col } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

export default function createItem() {
    const InputBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

    return (
        <div className="example-input">
            <Row type="flex" justify="center">
                <InputBox value={50}>
                    <h1>Add a New Item</h1>
                </InputBox>
            </Row>
            <Row type="flex" justify="center">
                <Col span={4}>
                    <InputBox value={100}>
                        <Input placeholder="Name" size="large"/>
                    </InputBox>
                </Col>
                <Col span={4}>
                    <InputNumber
                        defaultValue={0}
                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        onChange={onChange}
                    />
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Col span={4}>
                    <Input placeholder="Image Url" size="large"/>
                </Col>
                <Col span={4}>
                    <Input placeholder="Description" size="large"/>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <DatePicker onChange={onChange} />
            </Row>
        </div>
    )
}
