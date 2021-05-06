interface UploadFilesItem {
  maxSize: number
  accept: string
}

export default interface UploadFiles {
  images: UploadFilesItem
  pdf: UploadFilesItem
  archives: UploadFilesItem
}