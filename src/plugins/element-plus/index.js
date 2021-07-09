import ElementPlus from 'element-plus';
import './theme/index.css';

export default function install(app) {
  app.use(ElementPlus, {
    size: 'small',
    zIndex: 3000,
  });
}
