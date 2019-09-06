import Layout from '@/layout'

const axureRouter = {
  path: '/axure_groups/:axure_group_id/axures',
  component: Layout,
  redirect: '',
  props: (route) => ({ axureGroupId: parseInt(route.params.axure_group_id) }),
  meta: {
    title: 'Axure',
    icon: 'table'
  },
  children: [
    {
      path: '',
      name: 'axures',
      component: () => import('@/views/axures/index'),
      meta: { title: 'Axure List' }
    },
    {
      path: 'new',
      name: 'new-axure',
      component: () => import('@/views/axures/new'),
      meta: { title: 'Axure New' }
    },
    {
      path: ':id/edit',
      name: 'edit-axure',
      component: () => import('@/views/axures/edit'),
      meta: { title: 'Axure Edit' }
    }
  ]
}
export default axureRouter
