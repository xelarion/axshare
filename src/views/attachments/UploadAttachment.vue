<template>
  <el-upload
    class="upload-demo"
    drag
    :action="uploadSetting.url"
    :data="uploadSetting"
    :on-exceed="onExceed"
    :on-success="onSuccess"
  >
    <i class="el-icon-upload" />
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div slot="tip" class="el-upload__tip">只能上传zip/rar文件</div>
  </el-upload>
</template>

<script>
import { Message } from 'element-ui'
import { getQiNiuToken } from '@/api/qiniu'
import webConfig from '../../../public/static/config.js'

export default {
  name: 'UploadAttachment',
  data() {
    return {
      uploadSetting: {
        token: '',
        url: webConfig.QINIU_UPLOAD_URL
      },
      fileHash: ''
    }
  },
  computed: {

  },
  created() {
    this.getToken()
  },
  methods: {
    onExceed() {
      Message({
        message: '只能上传一个文件，请先删除已选择的文件！',
        type: 'error',
        duration: 1.5 * 1000
      })
    },
    onSuccess(response, file, fileList) {
      this.fileHash = response.hash
      this.$emit('attachment-hash', this.fileHash)
    },
    getToken() {
      getQiNiuToken().then(response => {
        this.uploadSetting.token = response.data
      })
    }
  }
}
</script>
