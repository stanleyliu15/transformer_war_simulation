import request from './request';

export default {
  getTransformer: id => request(`/transformers/${id}`, 'get'),
  getTransformers: () => request('/transformers', 'get'),
  getAutobots: () => request('/transformers/allegiance/autobot', 'get'),
  getDecepticons: () => request('/transformers/allegiance/decepticon', 'get'),
  postTransformer: transformer => request('/transformers', 'post', transformer),
  putTransformer: (id, transformer) => request(`/transformers/${id}`, 'put', transformer),
  deleteTransformer: id => request(`/transformers/${id}`, 'delete')
};
