import {useFormik} from "formik";
import * as Yup from 'yup'
import s from "./contactForm.module.scss";
import {Button} from "../../../common/button/Button";
import arrow from "../../../sources/images/ArroyRight.png";
import React from "react";


export const ContactForm = () => {

    const formik = useFormik({
        validationSchema: Yup.object({
            name: Yup.string().max(20, "Max length 20 symbols").required('* Name field is required'),
            email: Yup.string().email('Invalid email address').required('* Email field is required'),
            subject: Yup.string().max(30, "Max length 30 symbols").required('* Subject field is required'),
            message: Yup.string().required('* Message field is required'),
        }),
        initialValues: {
            name: "",
            email: '',
            subject: '',
            message: "",
        },
        onSubmit: values => {
            console.log(values)
        },
    })
    return <form className={s.form} onSubmit={formik.handleSubmit}>
        <div className={s.inputWithError}>
            <input type={"text"} className={`${s.input} ${formik.errors.name ? s.input_error : null}`}
                   placeholder={"Your name"} {...formik.getFieldProps('name')}/>
            {formik.errors.name && formik.touched.name ? <div className={s.errorText}>{formik.errors.name}</div> : null}
        </div>
        <div className={s.inputWithError}>
            <input type={"email"} className={`${s.input} ${formik.errors.email ? s.input_error : null}`}
                   placeholder={"Your email"} {...formik.getFieldProps('email')}/>
            {formik.errors.email && formik.touched.email ?
                <div className={s.errorText}>{formik.errors.email}</div> : null}
        </div>
        <div className={s.inputWithError}>
            <input type={"text"} className={`${s.input} ${formik.errors.subject ? s.input_error : null}`}
                   placeholder={"Your subject"} {...formik.getFieldProps('subject')}/>
            {formik.errors.subject && formik.touched.subject ?
                <div className={s.errorText}>{formik.errors.subject}</div> : null}
        </div>

        <div className={s.textAreaWithError}>
            <textarea className={`${s.textArea} ${formik.errors.subject ? s.textArea_error : null}`}
                      placeholder={"Your message"} {...formik.getFieldProps('message')}/>
            {formik.errors.message && formik.touched.message ?
                <div className={s.errorText}>{formik.errors.message}</div> : null}
        </div>


        <Button type="submit" text="Send message" image={arrow} onClick={formik.handleSubmit}/>
    </form>
}