import Header from "../components/Header"
import Image from "next/dist/client/image";

function Checkout() {
    return (
        <div className="bg-gray-100 " > 
        <Header />

        <main className="lg:flex max-w-screen-2xl mx-auto">

            {/* Left */}
            <div className="flex-grow">
                <Image src="https://links.papareact.com/ikj" 
                width={1020} 
                height={250}
                objectFit="contain" 
                
                />

                <div>
                    <h1>Shopping Basket</h1>
                </div>
            </div>


            {/* Right */}

        </main>
        
            
        </div>
    );
}

export default Checkout;
