import Layout from '@/layout'

const axureGroupRouter = {
  path: '/axure_groups',
  component: Layout,
  redirect: '',
  meta: {
    title: 'AxureGroup',
    icon: 'table'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/axure_groups/index')
    }
  ]
}
export default axureGroupRouter
