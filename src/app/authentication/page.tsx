"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input"
export default function Authentication() {

    const handleAuth = () => {

    }
    return (
        <div className="flex">
            <div className="bg-green-200 w-2/4">
                <span>foto</span>
            </div>
            <div className="flex flex-col p-10">
                <div>
                    <span>Entrar</span>
                    <span>Cadastrar</span>
                </div>

                <span className="font-semibold text-3xl mb-5">Participe da maior comunidade de<br/> estudos de TI do Brasil!</span>
                <form>
                    <Input placeholder="Email"/>
                    <Input placeholder="Senha"/>
                    <Button text="Entrar" onClick={() => {}}/>
                </form>
                <span>Esqueci a senha</span>
            </div>
        </div>
    )
}