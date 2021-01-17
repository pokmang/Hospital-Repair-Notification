import React from 'react';
import { Upload, message } from 'antd';


const UploadGallery = ({ fileList, onChange }) => {

  const handleChange = ({ fileList: newFileList }) => {
    console.log(newFileList)
    onChange(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const beforeUpload = (file) => {
    console.log(file)
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error('Image must smaller than 10MB!');
    }
    return false;
  }
  return (
    <Upload
      listType="picture-card"
      beforeUpload={beforeUpload}
      onChange={handleChange}
      onPreview={onPreview}
    >
      {fileList.length < 5 && '+ รูปภาพ'}
    </Upload>

  );
};

export default UploadGallery;