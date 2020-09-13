import Layout from '@/layout'

const axureGroupRouter = {
  path: '/axure_groups',
  component: Layout,
  redirect: '',
  meta: {
    title: '原型组织',
    icon: 'table'
  },
  children: [
    {
      path: '',
      name: 'axure-groups',
      component: () => import('@/views/axure_groups/index')
    },
    {
      path: 'new',
      name: 'new-axure-group',
      component: () => import('@/views/axure_groups/New'),
      meta: { title: '新增' }
    },
    {
      path: ':id/edit',
      name: 'edit-axure-group',
      component: () => import('@/views/axure_groups/Edit'),
      meta: { title: '编辑' }
    }
  ]
}
export default axureGroupRouter
