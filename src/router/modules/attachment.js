import Layout from '@/layout'

const attachmentRouter = {
  path: '/axure_groups/:axure_group_id/axures/:axure_id/attachments',
  component: Layout,
  redirect: '',
  meta: {
    title: 'Attachement',
    icon: 'table'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/attachments/index'),
      meta: { title: 'Attachement List' }
    }
  ]
}
export default attachmentRouter
