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
                    <div className="text-white flex flex-col lg:py-2 text-center">
                        <FontAwesomeIcon icon={faBurger} className="md:h-6 md:my-2 lg:h-6 lg:my-2"/>
                        <span className="font-bold md:text-xxs lg:text-xxs">FoodFlow</span>
                    </div>
                    <ul className="flex-1 flex flex-col justify-center">
                        <li className="text-white flex flex-col lg:py-2 justify-center text-center">
                            <FontAwesomeIcon icon={faCartPlus} className="md:h-6 md:my-2 lg:h-6 my-2"/>
                            <span className="font-bold md:text-xxs lg:text-xxs">Avulsa</span>
                        </li>
                        <li className="text-white flex flex-col lg:py-2 justify-center text-center">
                            <FontAwesomeIcon icon={faReceipt} className="md:h-6 md:my-2 lg:h-6 my-2"/>
                            <span className="font-bold md:text-xxs lg:text-xxs">Comandas</span>
                        </li>
                        <li className="text-white flex flex-col lg:py-2 justify-center text-center">
                            <FontAwesomeIcon icon={faMotorcycle} className="md:h-6 md:my-2 lg:h-6 my-2"/>
                            <span className="font-bold md:text-xxs lg:text-xxs">Delivery</span>
                        </li>
                        <li className="text-white flex flex-col lg:py-2 justify-center text-center">
                            <FontAwesomeIcon icon={faCashRegister} className="md:h-6 md:my-2 lg:h-6 my-2"/>
                            <span className="font-bold md:text-xxs lg:text-xxs">Caixa</span>
                        </li>
                        <li className="text-white flex flex-col lg:py-2 justify-center text-center">
                            <FontAwesomeIcon icon={faCircleUser} className="md:h-6 md:my-2 lg:h-6 my-2"/>
                            <span className="font-bold md:text-xxs lg:text-xxs">Clientes</span>
                        </li>
                    </ul>
                    <div className="text-white flex flex-col py-4 text-center ">
                        <FontAwesomeIcon icon={faGear} className="md:h-6 md:my-2 lg:h-6 my-2"/>
                        <span className="font-bold md:text-xxs lg:text-xxs">Config.</span>
                    </div>
                </nav>
            </header>
            <main className="flex flex-1 flex-col md:px-6 md:py-4 lg:px-8 lg:py-6">
                <h1 className="md:text-2xl lg:text-2xl flex font-bold gap-2 md:mb-4 lg:mb-6 text-rose"><span>Mesas</span><FontAwesomeIcon icon={faUtensils} className="md:h-6 lg:h-6"/></h1>
                <div className="flex flex-1 flex-row flex-wrap gap-4 bg-white rounded-xl md:p-4 lg:p-6 shadow-container overflow-y-auto" id="container-comandas">
                    <div className="md:w-32 md:h-32 lg:w-24 lg:h-24">
                        <div className="flex flex-nowrap w-full h-full bg-middle-orange rounded-xl text-white justify-center items-center md:text-2xl text-lg font-bold">100</div>
                        <p className="text-center font-bold lg:text-xs mt-1 text-dark-gray">Ocupada</p>    
                    </div>
                    <div className="md:w-32 md:h-32 lg:w-24 lg:h-24">
                        <div className="flex flex-nowrap w-full h-full bg-soft-orange rounded-xl text-white justify-center items-center md:text-2xl text-lg font-bold">101</div>
                        <p className="text-center font-bold lg:text-xs mt-1 text-dark-gray">Disponível</p>    
                    </div>
                </div>
            </main>
        </>
    );
}