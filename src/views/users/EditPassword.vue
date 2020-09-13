<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
            <el-form-item label="旧密码" prop="old_password">
              <el-input v-model="ruleForm.old_password" />
            </el-form-item>
            <el-form-item label="新密码" prop="new_password">
              <el-input v-model="ruleForm.new_password" />
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
import { getUser, updateUserPassword } from '@/api/user'

export default {
  data() {
    return {
      ruleForm: {
        new_password: '',
        old_password: ''
      },
      rules: {
        old_password: [
          { required: true, message: '请输入旧密码', trigger: 'blur' },
          { min: 6, max: 100, message: '长度在 6 到 100 个字符', trigger: 'blur' }
        ],
        new_password: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
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
          updateUserPassword(this.userId, this.ruleForm).then(response => {
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
