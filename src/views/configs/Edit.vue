<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="200px" class="demo-ruleForm">
            <el-form-item label="站点名称" prop="site_name">
              <el-input v-model="ruleForm.site_name" />
            </el-form-item>
            <el-form-item label="备案号" prop="icp_record_no">
              <el-input v-model="ruleForm.icp_record_no" />
            </el-form-item>
            <el-form-item label="备案号链接" prop="icp_record_link">
              <el-input v-model="ruleForm.icp_record_link" />
            </el-form-item>
            <el-form-item label="Copyright" prop="copyright">
              <el-input v-model="ruleForm.copyright" />
            </el-form-item>
            <el-form-item label="原型解压文件夹" prop="file_release_dir">
              <el-input v-model="ruleForm.file_release_dir" />
            </el-form-item>
            <el-form-item label="原型域名" prop="web_domain">
              <el-input v-model="ruleForm.web_domain" />
            </el-form-item>
            <el-form-item label="七牛云-AccessKey" prop="qiniu_access_key">
              <el-input v-model="ruleForm.qiniu_access_key" />
            </el-form-item>
            <el-form-item label="七牛云-SecretKey" prop="qiniu_secret_key">
              <el-input v-model="ruleForm.qiniu_secret_key" />
            </el-form-item>
            <el-form-item label="七牛云-Bucket" prop="qiniu_bucket">
              <el-input v-model="ruleForm.qiniu_bucket" />
            </el-form-item>
            <el-form-item label="七牛云-自定义域名" prop="qiniu_bucket_domain">
              <el-input v-model="ruleForm.qiniu_bucket_domain" />
            </el-form-item>
            <el-form-item label="七牛云-UploadURL" prop="qiniu_upload_url">
              <el-input v-model="ruleForm.qiniu_upload_url" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small" @click="submitForm('ruleForm')">提交</el-button>
              <router-link to="/">
                <el-button size="small">返回首页</el-button>
              </router-link>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>

  </div>
</template>
<script>
import { getConfig, updateConfig } from '@/api/config'

export default {
  data() {
    return {
      ruleForm: {
        site_name: '',
        icp_record_link: '',
        icp_record_no: '',
        copyright: '',
        file_release_dir: '',
        web_domain: '',
        qiniu_access_key: '',
        qiniu_secret_key: '',
        qiniu_bucket: '',
        qiniu_bucket_domain: '',
        qiniu_upload_url: ''
      },
      rules: {
        file_release_dir: { required: true, message: '请填写原型解压文件夹，用作生成静态html', trigger: 'blur' },
        web_domain: { required: true, message: '请填写原型域名，用作访问原型地址', trigger: 'blur' },
        qiniu_access_key: { required: true, message: '请填写七牛云AccessKey', trigger: 'blur' },
        qiniu_secret_key: { required: true, message: '请填写七牛云SecretKey', trigger: 'blur' },
        qiniu_bucket: { required: true, message: '请填写七牛云Bucket', trigger: 'blur' },
        qiniu_bucket_domain: { required: true, message: '请填写七牛云自定义域名BucketDomain', trigger: 'blur' },
        qiniu_upload_url: { required: true, message: '请填写七牛云UploadURL', trigger: 'blur' }
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getConfig().then(response => {
        this.ruleForm = response.data
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          updateConfig(this.ruleForm).then(response => {
            if (response.code === 0) {
              this.$router.push({ name: 'edit-config' })
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
