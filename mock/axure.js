import Mock from 'mockjs'

const data = Mock.mock({
  'axures|7': [{
    id: '@id',
    desc: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    latest_link: 'latest_link',
    updated_at: '@datetime',
    permanent_link: '@integer(300, 5000)'
  }]
})

export default [
  {
    url: '/axure/list',
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
