import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const CustomerInfo = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <h2 className="mb-4 text-center">Customer Information Form</h2>
        <Formik
          initialValues={{
            customerId: "",
            name: "",
            email: "",
            purchaseHistory: [
              {
                date: "",
                product: "",
                quantity: "",
                price: "",
              },
            ],
            preferences: {
              fabricTypes: "",
              colors: "",
              designs: "",
            },
          }}
          validationSchema={Yup.object({
            customerId: Yup.string().required("Customer ID is required"),
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            purchaseHistory: Yup.array().of(
              Yup.object().shape({
                date: Yup.date().required("Date is required"),
                product: Yup.string(),
                quantity: Yup.number(),
                price: Yup.number().required("Price is required"),
              })
            ),
            preferences: Yup.object().shape({
              fabricTypes: Yup.string().required("Fabric Type is required"),
              colors: Yup.string().required("Color is required"),
              designs: Yup.string().required("Design is required"),
            }),
          })}
          validateOnChange={false}
          validateOnBlur={true}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values); // Log values to debug

            axios.post("http://localhost:3001/customers", values)
              .then(response => {
                alert("Customer added successfully");
                setSubmitting(false);
              })
              .catch(error => {
                alert("Error adding customer");
                setSubmitting(false);
              });
          }}
        >
          {({ values }) => (
            <Form>
              <div className="mb-3">
                <label htmlFor="customerId" className="form-label">
                  Customer ID
                </label>
                <Field
                  type="text"
                  name="customerId"
                  className="form-control form-control-sm"
                />
                <ErrorMessage
                  name="customerId"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="form-control form-control-sm"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="form-control form-control-sm"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="mb-4">
                <h3>Purchase History</h3>
                <FieldArray name="purchaseHistory">
                  {({ push, remove }) => (
                    <>
                      {values.purchaseHistory.map((purchase, index) => (
                        <div key={index} className="mb-3 border p-3">
                          <div className="row mb-3">
                            <div className="col">
                              <label
                                htmlFor={`purchaseHistory[${index}].date`}
                                className="form-label"
                              >
                                Date
                              </label>
                              <Field
                                name={`purchaseHistory[${index}].date`}
                                type="date"
                                className="form-control"
                              />
                              <ErrorMessage
                                name={`purchaseHistory[${index}].date`}
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="col">
                              <label
                                htmlFor={`purchaseHistory[${index}].product`}
                                className="form-label"
                              >
                                Product
                              </label>
                              <Field
                                name={`purchaseHistory[${index}].product`}
                                type="text"
                                className="form-control"
                              />
                              <ErrorMessage
                                name={`purchaseHistory[${index}].product`}
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="col">
                              <label
                                htmlFor={`purchaseHistory[${index}].quantity`}
                                className="form-label"
                              >
                                Quantity
                              </label>
                              <Field
                                name={`purchaseHistory[${index}].quantity`}
                                type="number"
                                className="form-control"
                              />
                              <ErrorMessage
                                name={`purchaseHistory[${index}].quantity`}
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="col">
                              <label
                                htmlFor={`purchaseHistory[${index}].price`}
                                className="form-label"
                              >
                                Price
                              </label>
                              <Field
                                name={`purchaseHistory[${index}].price`}
                                type="number"
                                className="form-control"
                              />
                              <ErrorMessage
                                name={`purchaseHistory[${index}].price`}
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="btn btn-danger"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() =>
                          push({
                            date: "",
                            product: "",
                            quantity: "",
                            price: "",
                          })
                        }
                        className="btn btn-primary"
                      >
                        Add Purchase
                      </button>
                    </>
                  )}
                </FieldArray>
              </div>

              <div className="mb-4">
                <h3>Preferences</h3>
                <div className="mb-3">
                  <label className="form-label d-block"><b>Fabric Types</b></label>
                  <div className="form-check form-check-inline">
                    <Field
                      type="radio"
                      name="preferences.fabricTypes"
                      value="Cotton"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Cotton</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      type="radio"
                      name="preferences.fabricTypes"
                      value="Denim"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Denim</label>
                  </div>
                  <ErrorMessage
                    name="preferences.fabricTypes"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label d-block"><b>Colors</b></label>
                  <div className="form-check form-check-inline">
                    <Field
                      type="radio"
                      name="preferences.colors"
                      value="Blue"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Blue</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      type="radio"
                      name="preferences.colors"
                      value="Black"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Black</label>
                  </div>
                  <ErrorMessage
                    name="preferences.colors"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label d-block"><b>Designs</b></label>
                  <div className="form-check form-check-inline">
                    <Field
                      type="radio"
                      name="preferences.designs"
                      value="Striped"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Striped</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <Field
                      type="radio"
                      name="preferences.designs"
                      value="Plain"
                      className="form-check-input"
                    />
                    <label className="form-check-label">Plain</label>
                  </div>
                  <ErrorMessage
                    name="preferences.designs"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CustomerInfo;

