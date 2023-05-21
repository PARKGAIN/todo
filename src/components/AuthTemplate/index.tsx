import { AuthTemplateContainer } from "./style";

const AuthTemplate = ({ children }: React.PropsWithChildren) => {
  return (
    <AuthTemplateContainer
      style={{ display: "flex", justifyContent: "center" }}
    >
      {children}
    </AuthTemplateContainer>
  );
};

export default AuthTemplate;
