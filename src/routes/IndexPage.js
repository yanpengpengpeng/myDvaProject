import React, { Component } from 'react';
import { connect } from 'dva';
import { Input, Form } from 'antd';
import styles from './IndexPage.css';

const options = {
  mapPropsToFields(props) {
    return {
      input1: Form.createFormField({value: props.inputValue.input1}),
      input2: Form.createFormField({value: props.inputValue.input2}),
      input3: Form.createFormField({value: props.inputValue.input3}),
    }
  },
  onFieldsChange(props, changedFields) {
    props.dispatch({
      type: 'form/save',
      payload: changedFields,
    })
  }
}
@connect(({ form }) => ({
  inputValue: form.inputValue,
}))
@Form.create(options)
class IndexPage extends Component {
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className={styles.normal}>
        {getFieldDecorator('input1')(<Input style={{ width: '300px'}} />)}
        {getFieldDecorator('input2')(<Input style={{ width: '300px'}} />)}
        {getFieldDecorator('input3')(<Input style={{ width: '300px'}} />)}
      </div>
    );
  }
}
export default IndexPage;
