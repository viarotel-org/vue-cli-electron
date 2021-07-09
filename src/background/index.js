import AppManager from './appManager';
import scheme from './scheme';

// Scheme must be registered before the app is ready
scheme.init('app');

const app = new AppManager();

global.appManager = app;

export default app;
