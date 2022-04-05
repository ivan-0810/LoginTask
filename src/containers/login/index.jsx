import React, { useContext, useEffect } from 'react';
import InpudField from '../../components/InputField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonMain from '../../components/Button';
import './index.scss';
import { validationNames } from '../../constants/validationNames';
import { check_credentials } from '../../actions/auth';
import { Context } from '../../context';

const Login = () => {
  const { dispatch, setIsLoading } = useContext(Context);

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(validationNames.wrongMail)
      .required(validationNames.requierd),
    password: Yup.string().required(validationNames.requierd)
  });

  const handleFormSubmit = values => {
    setIsLoading(true);
    dispatch(check_credentials(values));
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: handleFormSubmit
  });

  return (
    <Container className="d-flex align-items-center justify-content-center">
      {' '}
      <form
        className="d-flex flex-column justify-content-center w-md-50 w-100"
        onSubmit={formik.handleSubmit}
      >
        <Row>
          {' '}
          <Col>
            <h2 className="mt-3 text-gray text-center">Log in</h2>
          </Col>
        </Row>
        <Row className="styledRow">
          <Col sm={12} md={6} className="d-flex flex-column ">
            {' '}
            <InpudField
              name="email"
              label="Email"
              value={formik.values.email}
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
            />
            <InpudField
              name="password"
              label="Password"
              value={formik.values.password}
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password}
              helperText={formik.touched.password && formik.errors.password}
            />
            <ButtonMain type="submit" variant="secondary" className="">
              Submit
            </ButtonMain>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default Login;
