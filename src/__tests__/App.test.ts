import App from '../App.vue';
import { it, expect } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import ElementPlus from 'element-plus';

it('测试表单提交', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [ElementPlus],
    },
  });

  const btn = wrapper.find('[data-test="submit-btn"]');

  await btn.trigger('click');
  await flushPromises();

  console.log('el-form-item', wrapper.find('.el-form-item__content').html());
  const errors = wrapper.findAll('.el-form-item__error');
  expect(errors.length).toBe(1);
});
