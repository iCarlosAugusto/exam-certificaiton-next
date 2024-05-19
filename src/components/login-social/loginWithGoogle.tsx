import { useAuthentication } from "@/hooks/useAuthentication";

interface LoginWithGoogleProps {
    isLoading?: boolean;
    isDisabled?: boolean;
    onClick: () => void;
}

function LoginWithGoogle({isLoading = false, isDisabled = false, onClick }: LoginWithGoogleProps) {

    return (

        <div 
            className="border border-black p-2 rounded mt-5 w-full cursor-pointer" 
            onClick={isDisabled == false ? onClick : () => null}
        >
            {isLoading &&(
                <h1>carregando...</h1>
            )}
            <span>Continuar com Google</span>
        </div>
    )
}
export { LoginWithGoogle}