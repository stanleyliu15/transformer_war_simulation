import request from './request';

export default {
  getWar: () => request('/war'),
  getWarRandomize: () => request('/war/randomize')
};
