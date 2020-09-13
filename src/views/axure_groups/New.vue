<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
            <el-form-item label="名称" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="描述" prop="desc">
              <el-input v-model="ruleForm.desc" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small" @click="submitForm('ruleForm')">提交</el-button>
              <router-link :to="{name: 'axure-groups'}">
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
import { createAxureGroup } from '@/api/axure_group'

export default {
  data() {
    return {
      ruleForm: {
        name: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入原型组织名称', trigger: 'blur' },
          { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
        ],
        desc: [
          { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          createAxureGroup(this.ruleForm).then(response => {
            if (response.code === 0) {
              this.$router.push({ name: 'axure-groups' })
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
