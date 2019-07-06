import dva from 'dva';
import 'antd/dist/antd.css';
import './index.css';
import form from './models/form';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(form);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
