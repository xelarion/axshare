import Mock from 'mockjs'

const data = Mock.mock({
  'axures|1-25': [{
    'id|+1': 1,
    desc: '@sentence(10, 20)',
    web_link: 'web_link',
    is_released: true,
    updated_at: '@datetime',
    permanent_link: 'www.baidu.com'
  }]
})

export default [
  {
    url: '/axure_groups/:id(\\d+)/axures',
    type: 'get',
    response: config => {
      const axures = data.axures
      return {
        code: 20000,
        data: {
          total: axures.length,
          axures: axures
        }
      }
    }
  }
]
