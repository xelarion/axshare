<template>
  <div class="grid-content bg-purple">
    <div class="block">
      <el-timeline>
        <el-timeline-item
          v-for="attachment in list"
          :key="attachment.id"
          :timestamp="attachment.created_at"
          placement="top"
        >
          <el-card>
            <div v-if="attachment.id > 0" class="activity-title">
              <span class="operator">
                {{ attachment.user.nickname }}
              </span>
              <moment-locale :key="attachment.created_at" :time="attachment.created_at" />
              <span class="operation-title">更新了</span>
              <span class="axure-group-name">
                <router-link :to="{name: 'axures', params: { axure_group_id: attachment.axure_group.id }}">
                  {{ attachment.axure_group.name }}
                </router-link>
              </span>
              <span class="operation-title">原型 [</span>
              <a v-if="attachment.release_status === 'successful'" target="_blank" :href="attachment.web_link">
                {{ attachment.axure.name }}
              </a>
              <el-tooltip v-else-if="attachment.release_status === 'pending'" placement="top">
                <div slot="content">正在构建...</div>
                <span class="pending">{{ attachment.axure.name }}</span>
              </el-tooltip>
              <el-tooltip v-else-if="attachment.release_status === 'failed'" placement="top">
                <div slot="content">构建失败</div>
                <span class="failed">{{ attachment.axure.name }}</span>
              </el-tooltip>
              <span class="operation-title">]</span>
            </div>
            <p class="attachment-desc">{{ attachment.desc }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>

    <pagination
      v-show="pagination.total_count>0"
      :total="pagination.total_count"
      :page.sync="query.page"
      :limit.sync="query.per_page"
      @pagination="fetchData"
    />
  </div>
</template>

<script>
import { getAllList } from '@/api/attachment'
import Pagination from '@/components/Pagination'
import MomentLocale from '@/components/MomentLocale'

export default {
  name: 'Activity',
  components: {
    Pagination,
    MomentLocale
  },
  data() {
    return {
      list: [{
        id: 0
      }],
      query: {
        page: 1,
        per_page: 20
      },
      pagination: {
        current_page: 0,
        per_page: 0,
        total_count: 0,
        total_pages: 0
      },
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getAllList(this.query).then(response => {
        if (response.paginate.total_count > 0) {
          this.list = response.data
        }
        this.pagination = response.paginate
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .activity-title {
    font-size: 14px;
    color: #909399;

    .axure-group-name {
      font-weight: 500;
    }

    .operator {
      color: #20a0ff;
    }
    .operation-title {
      color: #222222;
    }
    div {
      display: inline;
    }
  }
  .attachment-desc {
    color: #888;
    line-height: 22px;
    max-height: 70px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .failed {
    color: red;
  }
  .pending {
    color: #d32cf1;
  }
</style>
