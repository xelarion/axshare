import Layout from '@/layout'

const axureRouter = {
  path: '/axure_groups/:axure_group_id/axures',
  component: Layout,
  redirect: '/axure_groups',
  props: (route) => ({ axureGroupId: parseInt(route.params.axure_group_id) }),
  meta: {
    title: '原型组织',
    icon: 'table'
  },
  children: [
    {
      path: '',
      name: 'axures',
      component: () => import('@/views/axures/index'),
      meta: { title: '原型列表' }
    },
    {
      path: 'new',
      name: 'new-axure',
      component: () => import('@/views/axures/New'),
      meta: { title: '新增' }
    },
    {
      path: ':id/edit',
      name: 'edit-axure',
      component: () => import('@/views/axures/Edit'),
      meta: { title: '编辑' }
    }
  ]
}
export default axureRouter
