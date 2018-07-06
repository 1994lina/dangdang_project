
import React from "react";
import ReactDOM from "react-dom";
import { Form, Input, Icon, Button } from 'antd';

import "../static/css/mydangdang.less";
let uuid = 0;
const FormItem = Form.Item;
class DynamicFieldSet extends React.Component {
    remove = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);
        uuid++;

        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const formItems = keys.map((k, index) => {
            return (
                <FormItem
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    // label={index === 0 ? 'Passengers' : ''}
                    required={false}
                    key={k}
                >
                    {getFieldDecorator(`names[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{
                            required: true,
                            whitespace: true,
                            message: "请输入正确的验证码",
                        }],
                    })(
                        <Input placeholder="请输入图形验证码" style={{ width: '40%',height:".9rem" ,marginBottom: 0 }} />
                    )}
                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            // disabled={keys.length === 1}
                            // onClick={() => this.remove(k)}
                        />
                    ) : null}
                </FormItem>
            );
        });
        return (
            <Form onSubmit={this.handleSubmit} className="ant-from1">
                <Input  placeholder="请输入你的手机号"></Input>
                {/*<FormItem {...formItemLayoutWithOutLabel}>*/}
                    {/*<Button type=""  style={{ width: '60%' }}>*/}
                        {/*<Icon type="user" /> 请输入你的手机号*/}
                    {/*</Button>*/}
                {/*</FormItem>*/}
                {formItems}
                <FormItem {...formItemLayoutWithOutLabel}>
                    <Button type=""  onClick={uuid !==1?this.add:null}>下一步</Button>
                </FormItem>

            </Form>
        );
    }
}

const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet);
export default WrappedDynamicFieldSet ;
