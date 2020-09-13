import Layout from '@/layout'

const userRouter = {
  path: '/users',
  component: Layout,
  meta: {
    title: '用户管理',
    icon: 'table'
  },
  children: [
    {
      path: '',
      name: 'users',
      component: () => import('@/views/users/index')
    },
    {
      path: 'new',
      name: 'new-user',
      component: () => import('@/views/users/New'),
      meta: { title: '新增' }
    },
    {
      path: ':id/edit',
      name: 'edit-user',
      component: () => import('@/views/users/Edit'),
      meta: { title: '编辑' }
    },
    {
      path: ':id/edit_password',
      name: 'edit-user-password',
      component: () => import('@/views/users/EditPassword'),
      meta: { title: '修改密码' }
    }
  ]
}
export default userRouter
