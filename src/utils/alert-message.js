import { Message } from 'element-ui'

// 提示信息保留时间间隔
const messageDuration = {
  'success': 3 * 1000,
  'error': 5 * 1000,
  'warning': 3 * 1000,
  'info': 5 * 1000
}

// 弹出提示信息
export function alertMessage(messageStruct) {
  if (messageStruct.type !== '') {
    Message({
      message: messageStruct.message,
      type: messageStruct.type,
      duration: messageDuration[messageStruct.type],
      showClose: true
    })
  }
}
