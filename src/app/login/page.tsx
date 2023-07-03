import Link from "next/link";
import Input from "@/components/Input";

export default function Login() {
    return(
       <body className="bg-palid-green flex flex-row justify-center items-center">
        <div className="flex flex-col justify-between items-center w-[530px] h-[675px] p-10 bg-white rounded-xl shadow-container">
            <div>
                <div className="text-center">

                    <h1>FoodFlow</h1>
                </div>
                <h3>Potencialize seu restaurante com tecnologia sob medida!</h3>
            </div>
            <form className="text-center space-y-3">
                <div>Preencha seus dados para entrar:</div>
                <Input type="email" borderColor="border-palid-green" textColor="text-palid-green" placeholder="E-mail" autocomplete="email"/>
                <Input type="password" borderColor="border-palid-green" textColor="text-palid-green" placeholder="Senha" autocomplete="current-password"/>
            </form>
            <div>
                <Link href="/">Esqueci minha senha</Link>
            </div>
        </div>
       </body>
    );
}