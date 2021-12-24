import {Field, Form, Formik} from 'formik';
import React from 'react';
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {addDataTC} from "./bll/dataReducer";


export const InputNumber = () => {
    const dispatch = useDispatch()
    const InputSchema = Yup.object().shape({
        number: Yup
            .number()
            .label('number')
            .typeError('you must specify a number')
            .min(0, 'Min value 0.')
            .max(100, 'Max value 30.')
            .required('Required'),
    });


    return (<Formik
        initialValues={{
            number: undefined,
        }}
        validationSchema={InputSchema}
        onSubmit={async (values, {resetForm}) => {
            await dispatch(addDataTC(Number(values.number)))
            resetForm()
        }}
    >
        {({errors, touched}) => (
            <Form className="inputGroup">
                <Field name="number" className="inputField"/>
                {errors.number && touched.number && (
                    <div className="error">{errors.number}</div>
                )}
                <button
                    className="buttonInput"
                    type={'submit'}>
                    Submit
                </button>
            </Form>
        )}
    </Formik>)


}
