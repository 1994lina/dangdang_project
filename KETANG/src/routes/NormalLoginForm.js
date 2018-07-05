import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {connect} from "react-redux";
 import React from "react";
 import ReactDOM from "react-dom";
 import {NavLink,Link} from "react-router-dom"


const FormItem = Form.Item;

 class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号/邮箱/昵称" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                </FormItem>
                <Button type="" htmlType="submit" className="login-form-button">
                   登录
                </Button>
                <div>
                    <a className="login-form-forgot" href="">找回密码</a>

                    <NavLink to="/register">
                        <Icon type="arrow-right" />
                        注册</NavLink>
                </div>
            </Form>
        );
    }
}

let WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;

