import styles from "../style"

import { Logo, logo3 } from "../assets"

import { footerLinks, Partefotter, socialMedia } from "../constants"

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex-1 flex flex-col justify start mr-10">
                <img src={Logo} alt="ValorBank" className="w-[266px] h-[90px] object-contain" />

                <p className={`${styles.paragraph}  max-w-[310px]`}>Uma nova maneira de tornar os pagamentos fáceis, confiáveis ​​e seguros.</p>
            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerLink) => (
                    <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                            {footerLink.title}
                        </h4>

                        <uL className="list-none mt-4">
                            {footerLink.links.map((link, index) => (
                                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite
                                 hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}>
                                    {link.name}
                                </li>
                            ))}
                        </uL>
                    </div>
                ))}
            </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            {Partefotter.map((fotter, index) => (

            <img src={logo3} alt="logo-criador" className={`w-[140px] h-[50px] object-contain cursor-pointer ${index !== Partefotter.length - 1 ? "mr-6" : "mr-0"}`}
                onClick={() => window.open(fotter.link)} />
            ))}
            
            <p className="font-poppins font-normal text-left text-[18px] leading-[27px] text-white w-full">
                Desenvolvido por Gustavo Alves.
            </p>
            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                            }`}
                             onClick={() => window.open(social.link)}
                    />
                ))}
            </div>
        </div>
    </section>
)


export default Footer