import Layout from '@/layout'

const userRouter = {
  path: '/users',
  component: Layout,
  children: [
    {
      path: '',
      name: 'users',
      component: () => import('@/views/users/index'),
      meta: { title: 'Users' }
    },
    {
      path: 'new',
      name: 'new-user',
      component: () => import('@/views/users/New'),
      meta: { title: 'User New' }
    },
    {
      path: ':id/edit',
      name: 'edit-user',
      component: () => import('@/views/users/Edit'),
      meta: { title: 'User Edit' }
    }
  ]
}
export default userRouter
