<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
            <el-form-item label="主题描述" prop="desc">
              <el-input v-model="ruleForm.desc" />
            </el-form-item>
            <el-form-item v-show="isSetRemark" label="内容备注" prop="remark">
              <el-input v-model="ruleForm.remark" type="textarea" />
            </el-form-item>
            <el-form-item label="原型文件" prop="attachment">
              <el-col :span="13">
                <el-upload
                  class="upload-demo"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                >
                  <i class="el-icon-upload" />
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-col>

            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small" @click="submitForm('ruleForm')">提交</el-button>
              <router-link :to="{name: 'axures'}">
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
import { getAxure } from '@/api/axure'

export default {
  data() {
    return {
      ruleForm: {
        desc: '',
        remark: '',
        attachment: ''
      },
      rules: {
        desc: [
          { required: true, message: '请输入原型主题描述', trigger: 'blur' },
          { min: 1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur' }
        ],
        remark: [
          { required: true, message: '请填写此原型修改内容备注', trigger: 'blur' }
        ],
        attachment: [
          { required: true, message: '请上传原型' }
        ]
      }
    }
  },
  computed: {
    axureGroupId() {
      return parseInt(this.$route.params.axure_group_id)
    },
    axureId() {
      return parseInt(this.$route.params.id)
    },
    isSetRemark() {
      return this.ruleForm.attachment !== '' && this.ruleForm.attachment !== undefined
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getAxure(this.axureGroupId, this.axureId).then(response => {
        this.ruleForm = response.data
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
