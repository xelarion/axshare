<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
            <el-form-item label="主题描述" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="原型描述" prop="attachment.desc">
              <el-input v-model="ruleForm.attachment.desc" type="textarea" />
            </el-form-item>
            <el-form-item label="原型文件" prop="attachment.file_hash">
              <el-col :span="13">
                <upload-attachment @attachment-hash="setAttachmentFileHash" />
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
import { createAxure } from '@/api/axure'
import UploadAttachment from '@/views/attachments/UploadAttachment'

export default {
  components: {
    UploadAttachment
  },
  data() {
    return {
      ruleForm: {
        name: '',
        attachment: {
          desc: '',
          file_hash: ''
        }
      },
      rules: {
        name: [
          { required: true, message: '请输入原型主题描述', trigger: 'blur' },
          { min: 1, max: 200, message: '长度在 1 到 200 个字符', trigger: 'blur' }
        ],
        attachment: {
          desc: [
            { required: true, message: '请填写此原型修改内容备注', trigger: 'blur' }
          ],
          file_hash: [
            { required: true, message: '请上传原型, 如正在上传请等待上传完成！' }
          ]
        }
      }
    }
  },
  computed: {
    axureGroupId() {
      return parseInt(this.$route.params.axure_group_id)
    }
  },
  methods: {
    setAttachmentFileHash(fileHash) {
      this.ruleForm.attachment.file_hash = fileHash
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          createAxure(this.axureGroupId, this.ruleForm).then(response => {
            if (response.code === 0) {
              this.$router.push({ name: 'axures' })
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
