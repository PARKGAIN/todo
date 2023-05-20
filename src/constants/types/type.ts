export type AuthFormProps = {
    type:"register" | "login"
}

export type ButtonProps = {
    children: React.ReactNode;
    type?:"button" |"submit"
}

export type UserInput = {
    id: string;
    password: string;
}

export type Todos={
  id:number;
  text:string;
  images?:string[] | undefined;
  checked:boolean;
  createdAt:string;
}