<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户昵称" prop="nickname">
              <el-input v-model="ruleForm.nickname" />
            </el-form-item>
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small" @click="submitForm('ruleForm')">提交</el-button>
              <router-link :to="{name: 'users'}">
                <el-button size="small">返回</el-button>
              </router-link>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import { getUser, updateUser } from '@/api/user'

export default {
  data() {
    return {
      ruleForm: {
        nickname: '',
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入登录名', trigger: 'blur' },
          { min: 4, max: 50, message: '长度在 4 到 50 个字符', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
        ],
        password: [
          { min: 6, max: 100, message: '长度在 6 到 100 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    userId() {
      return parseInt(this.$route.params.id)
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getUser(this.userId).then(response => {
        this.ruleForm = response.data
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          updateUser(this.userId, this.ruleForm).then(response => {
            if (response.code === 0) {
              this.$router.push({ name: 'users' })
            } else {
              return false
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
