import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faReceipt, 
    faCartPlus, 
    faMotorcycle, 
    faCashRegister, 
    faCircleUser, 
    faGear,
    faBurger,
    faUtensils 
} from "@fortawesome/free-solid-svg-icons";

export default function IndexComandas() {
    return (
        <>
            <header className="h-full w-[89px] bg-palid-green">
                <nav className="flex flex-col justify-between h-full">
                    <div className="text-white flex flex-col py-4 text-center">
                        <FontAwesomeIcon icon={faBurger} className="h-8 my-2"/>
                        <span className="font-bold text-xs">FoodFlow</span>
                    </div>
                    <ul className="flex-1 flex flex-col justify-center">
                        <li className="text-white flex flex-col py-4 justify-center text-center">
                            <FontAwesomeIcon icon={faCartPlus} className="h-8 my-2"/>
                            <span className="font-bold text-xs">Avulsa</span>
                        </li>
                        <li className="text-white flex flex-col py-4 justify-center text-center">
                            <FontAwesomeIcon icon={faReceipt} className="h-8 my-2"/>
                            <span className="font-bold text-xs">Comandas</span>
                        </li>
                        <li className="text-white flex flex-col py-4 justify-center text-center">
                            <FontAwesomeIcon icon={faMotorcycle} className="h-8 my-2"/>
                            <span className="font-bold text-xs">Delivery</span>
                        </li>
                        <li className="text-white flex flex-col py-4 justify-center text-center">
                            <FontAwesomeIcon icon={faCashRegister} className="h-8 my-2"/>
                            <span className="font-bold text-xs">Caixa</span>
                        </li>
                        <li className="text-white flex flex-col py-4 justify-center text-center">
                            <FontAwesomeIcon icon={faCircleUser} className="h-8 my-2"/>
                            <span className="font-bold text-xs">Clientes</span>
                        </li>
                    </ul>
                    <div className="text-white flex flex-col py-4 text-center ">
                        <FontAwesomeIcon icon={faGear} className="h-8 my-2"/>
                        <span className="font-bold text-xs">Config.</span>
                    </div>
                </nav>
            </header>
            <main className="flex flex-1 flex-col m-16">
                <h1 className="text-4xl flex font-bold gap-2 mb-11 text-rose"><span>Mesas</span><FontAwesomeIcon icon={faUtensils} className="h-9"/></h1>
                <div className="flex-1 bg-white rounded-xl p-12 shadow-container">Container</div>
            </main>
        </>
    );
}