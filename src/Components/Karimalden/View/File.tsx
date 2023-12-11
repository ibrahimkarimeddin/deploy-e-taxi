import { Button, Upload, UploadFile } from 'antd'
import useFormField from '../../../Hooks/useFormField';
import { UploadOutlined } from '@ant-design/icons';
import { BaseURL } from '../../../api/config';


const File = ({ name, label, onChange, isDisabled, props }: any) => {

  const { formik, t } = useFormField(name, props)
  const imageUrl = formik.values[name] ? BaseURL + formik.values[name] :  '';

  const fileList: UploadFile[] = [

    {
      uid: '-1',
      name: '',
      status: 'done',
      url: imageUrl,
      thumbUrl: imageUrl,
    }
  ];
  const FilehandleChange = (value:any) => {
    console.log(value);
    
    formik.setFieldValue(name, value.file.originFileObj)

  };
  const customRequest = async ({ onSuccess}: any) => {
    onSuccess();
  };
  return (
    <div className="KarimField">
      <label htmlFor={name} className="text">
        {t(`${label || name}`)}
      </label>

      <Upload
        listType="picture"
        maxCount={1}
        className='w-100'
        defaultFileList={[...fileList]}
        onChange={onChange || FilehandleChange}
        customRequest={customRequest}

      >
        <Button className='w-100' icon={<UploadOutlined />}>Upload</Button>
      </Upload>



    </div>
  )
}

export default File