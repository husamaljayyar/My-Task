import { Typography } from "../../App.Styles";
import { FormBox, InnerDiv } from "./Login.Styles";
import Button from "../../Components/Button/Button";
import {
  ErrorMsg,
  Forms,
  Input,
} from "../../Components/FormInput/FormInput.Styles";
import { Formik } from "formik";
import { loginSchema } from "../../Valedation";
import { loginAction } from "../../Redux/User/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store);
  const error = user.message;

  // send values and history to action file
  const handleSaveChanges = async (values) => {
    dispatch(loginAction(values));
    history.push("/homepage");
  };

  return (
    <InnerDiv>
      <FormBox>
        <Typography fontSize={35} fontWeight={700} color={"#EBF5FB"}>
          Login
        </Typography>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema()}
          onSubmit={handleSaveChanges}
        >
          {({ errors, touched }) => {
            return (
              <Forms>
                <Input name={"email"} type={"email"} placeholder={"Email"} />
                {errors.email && touched.email ? (
                  <ErrorMsg>{errors.email}</ErrorMsg>
                ) : null}

                <Input
                  name={"password"}
                  type={"password"}
                  placeholder={"password"}
                />
                {errors.password && touched.password ? (
                  <ErrorMsg>{errors.password}</ErrorMsg>
                ) : null}

                {error ? <ErrorMsg>{error}</ErrorMsg> : null}

                <Button
                  width={"100%"}
                  borderRadius={6}
                  text={"Login"}
                  height={"50%"}
                  style={{
                    background: "#2E7DCB",
                    color: "#EBF5FB",
                    fontWeight: 500,
                    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
                  }}
                />
              </Forms>
            );
          }}
        </Formik>
      </FormBox>
    </InnerDiv>
  );
}

export default Login;
