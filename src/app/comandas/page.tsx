import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faReceipt, 
    faCartPlus, 
    faMotorcycle, 
    faCashRegister, 
    faCircleUser, 
    faGear,
    faBurger 
} from "@fortawesome/free-solid-svg-icons";

export default function IndexComandas() {
    return (
        <>
            <header className="h-full w-[89px] bg-palid-green">
                <nav className="flex flex-col justify-between h-full">
                    <div className="text-white flex flex-col py-4 text-center">
                        <FontAwesomeIcon icon={faBurger} className="h-8"/>
                        <span className="font-bold">FoodFlow</span>
                    </div>
                    <ul className="flex-1 flex flex-col justify-center">
                        <li className="text-white flex flex-col py-4 justify-center text-center">
                            <FontAwesomeIcon icon={faCartPlus} className="h-8"/>
                            <span className="font-bold">Avulsa</span>
                        </li>
                        <li className="text-white flex flex-col py-4 justify-center text-center">
                            <FontAwesomeIcon icon={faReceipt} className="h-8"/>
                            <span className="font-bold">Comandas</span>
                        </li>
                        <li className="text-white flex flex-col py-4 justify-center text-center">
                            <FontAwesomeIcon icon={faMotorcycle} className="h-8"/>
                            <span className="font-bold">Delivery</span>
                        </li>
                        <li className="text-white flex flex-col py-4 justify-center text-center">
                            <FontAwesomeIcon icon={faCashRegister} className="h-8"/>
                            <span className="font-bold">Caixa</span>
                        </li>
                        <li className="text-white flex flex-col py-4 justify-center text-center">
                            <FontAwesomeIcon icon={faCircleUser} className="h-8"/>
                            <span className="font-bold">Clientes</span>
                        </li>
                    </ul>
                    <div className="text-white flex flex-col py-4 text-center ">
                        <FontAwesomeIcon icon={faGear} className="h-8"/>
                        <span className="font-bold">Config.</span>
                    </div>
                </nav>
            </header>
            <main className="flex-1">
                <h1>Mesas <span>Foto</span></h1>
                <div>Container</div>
            </main>
        </>
    );
}