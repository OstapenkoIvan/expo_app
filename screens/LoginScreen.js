import AuthContainer from "../components/AuthContainer";
import AuthDetails from "../components/AuthDetails";

export default () => {
  return (
    <AuthContainer authType="login">
      <AuthDetails authType="login" />
    </AuthContainer>
  );
};
