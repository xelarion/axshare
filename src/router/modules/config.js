import Layout from '@/layout'

const configRouter = {
  path: '/config',
  component: Layout,
  meta: {
    title: '系统设置',
    icon: 'table'
  },
  children: [
    {
      path: '',
      name: 'edit-config',
      component: () => import('@/views/configs/Edit')
    }
  ]
}
export default configRouter
