import {
  ElMessageBox,
  ElMessage,
  ElLoading,
  ElNotification,
} from 'element-plus';

export function dialog(
  content, {
    isCancel = false,
    title = '提示',
    confirmText = '确认',
    cancelText = '取消',
    ...moreObj
  } = {},
) {
  return new Promise((resolve) => {
    ElMessageBox({
      title,
      message: content,
      confirmButtonText: confirmText,
      showCancelButton: isCancel,
      cancelButtonText: cancelText,
      ...moreObj,
    })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
}

export function toast(
  content, {
    duration = 2000,
    showClose = true,
    ...moreObj
  } = {},
) {
  return new Promise((resolve) => {
    ElMessage({
      message: content,
      duration,
      showClose,
      onClose() {
        resolve(true);
      },
      ...moreObj,
    });
  });
}

let loadingInstance = {};
export function loading(content, {
  ...moreObj
} = {}) {
  if (content) {
    loadingInstance = ElLoading.service({
      text: content,
      ...moreObj,
    });
  } else {
    loadingInstance.close();
  }
  return loadingInstance;
}

export function notify(
  content, {
    title = '提示',
    type = 'info',
    duration = 2000,
    ...moreObj
  } = {},
) {
  return new Promise((resolve) => {
    ElNotification({
      title,
      message: content,
      type,
      duration,
      onClose() {
        resolve(true);
      },
      ...moreObj,
    });
  });
}
