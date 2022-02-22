/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  // 开发
  dev: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/560063b0943ab35fe1cd4ee08a9b511c/api'
  },
  // 测试
  test: {
    baseApi: '//test.futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/560063b0943ab35fe1cd4ee08a9b511c/api'
  },
  // 线上
  prod: {
    baseApi: '//futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/560063b0943ab35fe1cd4ee08a9b511c/api'
  }
}
export default {
  env,
  mock: true,
  namespace:'manager',
  ...EnvConfig[env]  
}