import React from 'react'
import { Input, DatePicker, InputNumber, Row, Col, Button } from 'antd'
import './createItem.css'
const { TextArea } = Input;

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
    console.log(date, dateString);
}

export default function createItem() {
    return (
        <div className="create-new-page">
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <div className="gutter-box"><h1>Add a New Item</h1></div>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <Col span={4}>
                    <div className="gutter-box">
                        <Input placeholder="Name" size="large"/>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box">
                        <InputNumber
                            defaultValue={0}
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            onChange={onChange}
                            size="large"
                            style={{width:"100%"}}
                        />  
                    </div>
                </Col>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <Col span={4}>
                    <div className="gutter-box">
                        <TextArea placeholder="Image Url" size="large" autoSize={{ minRows: 3}}/>
                    </div>
                </Col>
                <Col span={4}>
                    <div className="gutter-box">
                        <TextArea placeholder="Description" size="large" autoSize={{ minRows: 3}}/>
                    </div>
                </Col>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]}>
                <div className="gutter-box">
                    <DatePicker onChange={onChange} />
                </div>
            </Row>
            <Row type="flex" justify="center" gutter={[24, 24]} style={{marginTop: "12px"}}>
                <div className="gutter-box" >
                    <Button type="primary">Submit</Button>
                </div>
            </Row>
        </div>
    )
}
