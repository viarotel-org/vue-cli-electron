import {
  protocol,
} from 'electron';

export default {
  init(scheme = 'app', options = {}) {
    protocol.registerSchemesAsPrivileged([{
      scheme,
      privileges: {
        secure: true,
        standard: true,
      },
      ...options,
    }]);
  },
};
