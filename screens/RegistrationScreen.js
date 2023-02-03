import AuthContainer from "../components/AuthContainer";
import AuthDetails from "../components/AuthDetails";

export default () => {
  return (
    <AuthContainer authType="register">
      <AuthDetails authType="register" />
    </AuthContainer>
  );
};
