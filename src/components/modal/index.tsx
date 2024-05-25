"use client";

import { Input } from "@/components/input";
import { Button } from "../button";
import { Fragment, useActionState, useState } from "react";
import { createAccount } from "@/actions/createAccount.action";
import { useFormState } from "react-dom";
import { useAuthentication } from "@/hooks/useAuthentication";
import { LoginWithGoogle } from "../login-social/loginWithGoogle";
import { IconX } from '@tabler/icons-react';


interface ModalAuthenticationProps {
  isOpen: boolean;
  closeModal: () => void;
}

function ModalAuthentication({ isOpen, closeModal }: ModalAuthenticationProps) {
  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(createAccount, initialState);
  const { authenticateWithGoogle, authenticateWithGithub, isLoading } = useAuthentication();

  const handleCloseModal = () => closeModal();
  
  if(isOpen){
    document.body.style.overflow = "hidden"
  } else{
    document.body.style.overflow = "visible"
  }

  return (
    <Fragment>
      {isOpen && (
        <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed z-50 flex items-center justify-center" >
          <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-black opacity-80 flex items-center justify-center" onClick={handleCloseModal}></div>
          <div className="absolute bg-white p-10 flex flex-col items-center ml-5 mr-5 rounded">
          <div className="p-3 bg-slate-200 rounded-full absolute right-4 top-4 cursor-pointer" onClick={handleCloseModal}>
            <IconX
              size={24}
            />
          </div>
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
            <form action={formAction} className="w-full">
              <Input placeholder="Seu nome" className="mb-4" name="username" />
              <Input
                placeholder="Seu email"
                className="mb-4"
                type="text"
                name="email"
              />
              <Input
                placeholder="Senha"
                className="mb-4 w-full"
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
