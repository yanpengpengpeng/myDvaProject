import React, {Component} from 'react';
import { Button, Form, Input } from 'antd';
import { connect } from 'dva';
import { withRouter } from 'dva/router'

const FormItem = Form.Item;
@connect( ({ from }) => ({
  userInfo: from.userInfo,
}))
@Form.create()
class Test extends Component{
  constructor(props){
    super(props)
    this.state = {
      intial: ''
    }
  }
  back = () => {
    this.props.history.goBack()
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <Button 
          onClick={() => {this.back()}}
        >
          点击回退到主页面
        </Button>
        <Form layout="horizontal">
          <FormItem label="点击获取您的姓名">
            <Button onClick={() => {
              this.props.dispatch({
                type:'from/getUserInfo'
              })
            }}></Button>
          </FormItem>
          <FormItem label='姓名'>
            {getFieldDecorator('user', {
              rules:[{ required: true, message: '请输入您的姓名!' }]
            })(
              <Input style={{width: '300px'}} />
            )}
          </FormItem>
          <FormItem></FormItem>
        </Form>
      </>
    );
  }
}



export default withRouter(Test);