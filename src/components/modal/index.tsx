import { Input } from "@/components/input"
import { Button } from "../button"

function ModalAuthentication() {
    return (
        <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed z-50 flex items-center justify-center ">
            <div className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-black opacity-80 flex items-center justify-center"></div>
            <div className="absolute bg-white p-10 flex flex-col items-center ml-5 mr-5 rounded">
                <span className="self-start font-bold text-2xl text-orange-500">Crie sua conta</span>
                
                <span>Seja bem-vindo! É um prazer ter você aqui :) <br/>Comece hoje a estudar gratuitamente</span>

                <div className="border border-black p-2 rounded mt-5 w-full cursor-pointer">
                    <span>Continuar com Google</span>
                </div>
                <div className="border border-black p-2 rounded mt-5 w-full cursor-pointer">
                    <span>Continuar com Github</span>
                </div>

                <span className="mb-2 mt-2">ou</span>
                
                <Input placeholder="Seu nome" className="mb-4"/>
                <Input placeholder="Seu email" className="mb-4" type="email"/>
                <Input placeholder="Senha" className="mb-4" type="password"/>
                <Button className="w-full md:w-full" onClick={() => {console.log("click")}} text="Criar conta"/>
                <hr/>

                <div className="mt-5">
                    <span>Já tem uma conta?</span>
                    <span className="font-bold ml-1 cursor-pointer">Entre por aqui</span>
                </div>
            </div>
        </div>
    )
}

export { ModalAuthentication }