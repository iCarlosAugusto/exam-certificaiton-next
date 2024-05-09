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

                <span className="font-semibold text-3xl">Participe da maior comunidade de estudos de TI do Brasil!</span>

                <Input placeholder="Email"/>
                <Input placeholder="Senha"/>
                <Button text="Entrar" onClick={() => {}}/>
            
                
                <span>Esqueci a senha</span>
            </div>
        </div>
    )
}