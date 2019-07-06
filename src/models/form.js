import { queryUserInfo } from '../services/test';  
import { message} from 'antd';

export default {

    namespace: 'form',
  
    state: {
      inputValue: {
        input1: '1',
        input2: '2',
        input3: '3',
      },
      userInfo: '',
    },

    effects: {
      *getUserInfo({ payload }, { call, put }) {  // eslint-disable-line
        try{
          const res = yield call(queryUserInfo)
          yield put({ 
            type: 'saveUserInfo',
            payload: res.name,
          });
        } catch (err) {
          message.error('数据请求错误');
          console.log(err)
        };
      },
    },
    reducers: {
      save(state, { payload }) {
        return { ...state, inputValue: {...state.inputValue, name: payload.value }};
      },
      saveUserInfo(state, { payload }) {
        return {
          ...state,
          userInfo: payload,
        }
      }
    },
  
  };