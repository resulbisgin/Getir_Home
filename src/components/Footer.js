import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"
import {BiGlobe} from "react-icons/bi"
import Menu from "./ui/Menu";
function Footer() {
    const menus=[
        {
            title:'Getir\'i Keşfedin',
            items:[{
                title:'Hakkımızda'
            },
            {
                title:'Kariyer'
            },
            {
                title:'İletişim'
            },
            {
                title:'COVID-19 Duyuru'
            },
            {
                title:'Sosyal Sorumluluk Projeleri'
            }

        ]
        },
        {
            title:'Yardıma mı ihtiyacınuz var?',
            items:[
                {
                title:'Sıkça Sorulan Sorular'
            },
            {
                title:'Kişisel Verilerin Korunması'
            },
            {
                title:'Gizlilik Politikası'
            },
            {
                title:'Kullanım Koşulları'
            },
            {
                title:'Çerez Politikası'
            }

        ]
        },
        {
            title:'İş Ortağımız Olun',
            items:[
                {
                title:'Bayimiz Olun'
            },
            {
                title:'Deponuzu Kiralayın'
            },
            {
                title:'GetirYemek Restoranı Olun'
            },
            {
                title:'GetirÇarşı İşletmesi Olun'
            },
            {
                title:'Zincir Restoranlar'
            }

        ]
        }
    ]
    return (
        <div className='bg-white mt-10'>
           <div className='container mx-auto'>
            <div className='grid grid-cols-5 pt-40'>
                <section>
                    <nav className='grid gap-y-4 '>
                    <h6 className="text-lg text-primary-brand-color" >Getir'i indirin.</h6>

                    <a href="#" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
                    </a>
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"/>
                    </a>
                    <a href="#" className="transition-all transform hover:scale-105">
                        <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
                    </a>
                    </nav>
                </section>
                {menus.map((menu,index)=><Menu key={index} {...menu}/>)}   
                <div className="flex items-center justify-center h-20 w-20 pt-14"> 
                    <img className="cursor-pointer" src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png"/>
                    </div>      
            </div>
            <div className="flex justify-between items-center border-t border-gray-100 mt-6 py-6">
                <div className="text-xs text-gray-700 flex gap-x-8" >
                    &copy; 2022 Getir
                    <a href="#" className="text-primary-brand-color hover:underline relative before:w-0.5 before:h-0.5 before:bg-black before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full">Bilgi Toplumu Hizmetleri</a>
                </div>
                <nav className="flex  gap-x-3">
                    <a href="#" className="w-8 h-8 rounded-lg text-gray-600 hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center  transition-all">
                        <FaFacebook size={20}/>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-lg text-gray-600 hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center  transition-all">
                        <FaTwitter size={20}/>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-lg text-gray-600 hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center  transition-all">
                        <FaInstagram size={20}/>
                    </a>
                    <a href="#" className="h-8 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent flex items-center px-2 text-sm gap-x-2 rounded text-gray-500 border border-gray-100">
                            <BiGlobe size={18} />
                            Türkçe (TR)
                        </a>
                </nav>
            </div>
           </div>
        </div>
    );
}

export default Footer;