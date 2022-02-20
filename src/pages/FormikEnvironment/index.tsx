import { Formik } from 'formik';
import { Button } from '../../components/ButtonDefault';

export function FormikEnvironment() {
  return (
    <>
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
