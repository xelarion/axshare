import Mock from 'mockjs'

const data = Mock.mock({
  'axure_groups|5-10': [{
    'id|+1': 1,
    name: '@sentence(1, 3)',
    desc: '@sentence(1, 5)'
  }]
})

export default [
  {
    url: '/axure_groups',
    type: 'get',
    response: config => {
      const axure_groups = data.axure_groups
      return {
        code: 20000,
        data: {
          total: axure_groups.length,
          axure_groups: axure_groups
        }
      }
    }
  }
]
