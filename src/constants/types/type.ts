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
  images?:string[]| undefined
  checked:boolean;
  createdAt?:string;

}

export type CheckboxProps=  {
    id: number;
    text: string;
    isCompleted: boolean;
    images?: string[] | undefined;
    setTodos:React.Dispatch<React.SetStateAction<Todos[]>>
  }

  export type AddTodoProps = {
    show: boolean;
    onCloseModal: () => void;
    todos: Todos[];
    setTodos:React.Dispatch<React.SetStateAction<Todos[]>>;
  }