import { Formik } from 'formik';
import { Button } from '../../components/ButtonDefault';
import { Image } from '../../components/Image';

export function FormikEnvironment() {
  return (
    <>
      <Image src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
      <Formik
        // validationSchema={ }
        initialValues={{}}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
        }} >
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }) => (
          <>
            <input type={'text'} onChange={handleChange} onBlur={handleBlur} value={'values'} />
            <Button>Submit</Button>
          </>
        )}
      </Formik>
    </>
  )
}
