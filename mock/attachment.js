import Mock from 'mockjs'

const data = Mock.mock({
  'attachments|7': [{
    id: '@id',
    desc: '@sentence(10, 20)',
    web_link: 'web_link',
    is_released: true,
    updated_at: '@datetime',
    download_url: 'www.baidu.com',
    user_nickname: '@sentence(1, 2)'
  }]
})

export default [
  {
    url: `/axure_groups/:id(\\d+)/axures/:id(\\d+)/attachments`,
    method: 'get',
    response: config => {
      const attachments = data.attachments
      return {
        code: 20000,
        data: {
          total: attachments.length,
          axures: attachments
        }
      }
    }
  }
]
