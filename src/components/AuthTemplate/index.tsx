const AuthTemplate = ({ children }: React.PropsWithChildren) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
  );
};

export default AuthTemplate;
