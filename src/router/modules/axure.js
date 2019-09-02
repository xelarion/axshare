import Layout from '@/layout'

const axureRouter = {
  path: '/axure_groups/:axure_group_id/axures',
  component: Layout,
  redirect: '',
  meta: {
    title: 'Axure',
    icon: 'table'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/axures/index'),
      meta: { title: 'Axure List' }
    }
  ]
}
export default axureRouter
