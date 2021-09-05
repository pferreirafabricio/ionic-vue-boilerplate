import api from '../../../api/index';

export default {
  uploadFile(_, file) {
    return api.post('/upload', file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  uploadFiles(_, files) {
    return api.post('/upload/multiple-files', files, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  deleteFile(_, filename) {
    return api.delete(`/file/delete/${filename}`);
  },
};
