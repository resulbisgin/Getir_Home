
function MobileApp() {
    return (
        <div className="bg-primary-brand-color flex flex-col md:flex-row justify-between items-center bg-mobile-app   rounded-lg text-white">
            <div className="flex flex-col text-center md:text-left gap-y-3 p-10">
                <h3 className="text-2xl font-bold tracking-tight ">Getir'i indirin</h3>
                <p className=" font-semibold tracking-tight">İstediğiniz ürünleri dakikalar içinde kapınıza <br/>getirelim.</p>
                <nav className="mt-5 flex  flex-wrap md:flex-nowrap gap-2 justify-center ">
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img className="md:h-8 lg:h-auto" src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
                    </a>
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img className="md:h-8 lg:h-auto" src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"/>
                    </a>
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img className="md:h-8 lg:h-auto" src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
                    </a>
                </nav>
            </div>
            <picture className="hidden md:block md:self-end pt-6">
                <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"/>
            </picture>
        </div>
    );
}

export default MobileApp;