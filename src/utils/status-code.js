export const statusCode = {
  StatusOK: 0,

  StatusUnauthorized: 10001,
  StatusTokenExpired: 10002,
  StatusInvalidToken: 10003,
  StatusUserNotFound: 10004,
  StatusErrorPassword: 10005,

  StatusSystemError: 20001,
  StatusResourceExpired: 20002,

  StatusCreateFailed: 30001,
  StatusUpdateFailed: 30002,
  StatusDestroyFailed: 30003,
  StatusBatchCreateFailed: 30004,
  StatusBatchUpdateFailed: 30005,
  StatusBatchDestroyFailed: 30006
}

/**
 * 是否需要重新登录
 * @return {boolean}
 */
export function isNeedReLogin(code) {
  return code === statusCode.StatusTokenExpired || code === statusCode.StatusInvalidToken
}
