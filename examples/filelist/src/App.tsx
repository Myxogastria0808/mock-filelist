import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FilePond } from 'react-filepond';
import { imageSchema, ImageSchemaType } from './validation/image';
import { ErrorMessage } from '@hookform/error-message';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: 0 20px;
  width: calc(100% - 40px);
  max-width: 600px;
  margin: 0 auto;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

const StyledLabel = styled.label`
  display: block;
  text-align: center;
  font-size: 2rem;
`;

const StyledFilePond = styled(FilePond)`
  & .filepond--drop-label {
    height: 276px;
    border: 1px solid #b3b3b3;
    font-size: 2rem;
  }
`;

const StyledUpdateInput = styled.input`
  display: block;
  margin: 0 auto;
  font-size: 2rem;
  height: 50px;
  width: 200px;
  background-color: #cadb49;
  border: none;
`;

function App() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ImageSchemaType>({
    resolver: zodResolver(imageSchema),
    defaultValues: {
      image: new DataTransfer().files,
    },
  });
  const onSubmit: SubmitHandler<ImageSchemaType> = async (formData) => {
    console.table(formData);
  };
  return (
    <StyledContainer>
      <StyledTitle>File Upload Form Sample</StyledTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledLabel htmlFor="imgae">画像のアップロード</StyledLabel>
        <Controller
          name="image"
          control={control}
          render={({ field: { onChange, name } }) => (
            <StyledFilePond
              name={name}
              storeAsFile={true}
              credits={false}
              labelIdle={'<span class="filepond--label-action"> ファイル選択 </span> または ドラッグ&ドロップ'}
              onupdatefiles={(files) => {
                const dataTransfer = new DataTransfer();
                files.forEach((file) => dataTransfer.items.add(file.file as File));
                onChange(dataTransfer.files);
              }}
            />
          )}
        />
        <br />
        <ErrorMessage errors={errors} name="image" message={errors.image?.message} />
        <br />
        <StyledUpdateInput type="submit" value="更新" />
      </form>
    </StyledContainer>
  );
}

export default App;
