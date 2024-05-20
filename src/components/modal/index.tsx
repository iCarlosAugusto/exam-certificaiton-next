import { Input } from "@/components/input";
import { Button } from "../button";
import { Fragment, useActionState } from "react";
import { createAccount } from "@/actions/createAccount.action";
import { useFormState } from "react-dom";
import { useAuthentication } from "@/hooks/useAuthentication";
import { LoginWithGoogle } from "../login-social/loginWithGoogle";

interface ModalAuthenticationProps {
  isOpen: boolean;
}

function ModalAuthentication({ isOpen }: ModalAuthenticationProps) {
  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(createAccount, initialState);
  const { authenticateWithGoogle, authenticateWithGithub, isLoading } = useAuthentication();

  return (
    <Fragment>
      {isOpen && (
        <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed z-50 flex items-center justify-center ">
          <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-black opacity-80 flex items-center justify-center"></div>
          <div className="absolute bg-white p-10 flex flex-col items-center ml-5 mr-5 rounded">
            <span className="self-start font-bold text-2xl text-orange-500">
              Crie sua conta
            </span>

            <span>
              Seja bem-vindo! É um prazer ter você aqui :) <br />
              Comece hoje a estudar gratuitamente
            </span>

            <LoginWithGoogle
              onClick={authenticateWithGoogle}
              isDisabled={isLoading}
            />
            <div className="border border-black p-2 rounded mt-5 w-full cursor-pointer">
              <span>Continuar com Github</span>
            </div>

            <span className="mb-2 mt-2">ou</span>
            <form action={formAction}>
              <Input placeholder="Seu nome" className="mb-4" name="username" />
              <Input
                placeholder="Seu email"
                className="mb-4"
                type="text"
                name="email"
              />
              <Input
                placeholder="Senha"
                className="mb-4"
                type="password"
                name="password"
              />
              <Button
                type="submit"
                className="w-full md:w-full"
                text="Criar conta"
              />
            </form>

            <div className="mt-5">
              <span>Já tem uma conta?</span>
              <span className="font-bold ml-1 cursor-pointer">
                Entre por aqui
              </span>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export { ModalAuthentication };
