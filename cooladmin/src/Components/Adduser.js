import React from "react";
import axios from "axios";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Adduser = () => {

    const formInitialschema = {
        name: '',
        email: '',
        mobile: '',
        city: '',

    }
    const validate = Yup.object({
        name: Yup.string().max(15, 'Must be 15 characters or less').required("name must be required."),
        email: Yup.string().required("Email must be required").email("Enter valid Email."),
        mobile: Yup.number().typeError('Please enter number.').required("Mobile number must be required"),
        city: Yup.string().required("Address must be required.").max(25, "Address is to long."),
        // password: Yup.string().required("Password must be required.").max(12, "Password should be less than or eqal to 12 char.")
    })

    const formHandelingFun = (value) => {
           const params =  value;
        //    console.log(params); return false;
        async function addUser() {
            const response = await axios.post(`http://localhost/symfony_api/public/index.php/api/customers-add`, params);
            if(response.data.status == 200) {
              toast.success(' User add successfully.' , {autoClose:9000})
            
            }
        }
        addUser();


        // toast.success('User add successfully.' , {autoClose:false})
        // toast.success(' User add successfully.' , {autoClose:9000})
        // console.log(value.name);
        // if(value != '') {

        // }
    }

    return (
        <React.Fragment>
            <div className="col-lg-12">
          
                <div className="card">
                 <ToastContainer style = {{marginTop:"10%", zIndex:999}} />   
                    <div className="card-header text-center">Add New User</div>
                    <div className="card-body card-block">
                        <Formik initialValues={formInitialschema} onSubmit={value => { formHandelingFun(value) }} validationSchema={validate}>
                            <Form action="" method="post" className="" >
                                <div className="form-group">
                                    <div className="input-group">
                                        <Field type="text" id="name" name="name" placeholder="name" className="form-control"  autoComplete="off" />
                                    </div>
                                    <span style={{ color: "red" }}><ErrorMessage name="name" /></span>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <Field type="email" id="email" name="email" placeholder="Email" className="form-control" />
                                    </div>
                                    <span style={{ color: "red" }}><ErrorMessage name="email" /></span>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <Field type="text" id="mobile" name="mobile" placeholder="+91" className="form-control" />
                                    </div>
                                    <span style={{ color: "red" }}><ErrorMessage name="mobile" /></span>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <Field type="text" id="city" name="city" placeholder="city" className="form-control" />
                                    </div>
                                    <span style={{ color: "red" }}><ErrorMessage name="city" /></span>
                                </div>

                                {/* <div className="form-group">
                                    <div className="input-group">
                                        <Field type="password" id="password" name="password" placeholder="Password" className="form-control" />
                                    </div>
                                    <span style={{ color: "red" }}><ErrorMessage name="password" /></span>
                                </div> */}
                                <div className="form-actions form-group float-right">
                                    <button type="submit" className="btn btn-success btn-sm">Submit</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Adduser;