import LocationIcon from "../assets/location.svg?react"
import MailIcon from "../assets/mail.svg?react"
import CallIcon from "../assets/call.svg?react"
import Building from "../assets/building.png"

const Contact = () => {
    return (
        <div className="flex flex-row bg-p1 pt-8">
            <div className="flex w-[50%] flex-col">
                <h2 id="contact" className="font-bebas text-4xl justify-between items-center py-2 px-32 text-white">CONTATO</h2>
                <p className="font-ubuntu text-lg mt-6 pl-32 text-c11">Entre em contato e saiba mais sobre a gente, a airtrackx está comprometida em criar um mundo melhor para todos.</p>
                <form className="space-y-6 p-8 shadow-md rounded-lg pl-32">
                    <div className="flex flex-row gap-6">
                        <div className="flex flex-col w-full">
                            <label htmlFor="name" className="mb-2 text-sm font-medium text-white">Nome:</label>
                            <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="email" className="mb-2 text-sm font-medium  text-white">E-mail:</label>
                            <input type="text" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-2 text-sm font-medium  text-white">Mensagem:</label>
                        <textarea id="message" name="message" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="text-white bg-p5 hover:bg-p3 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">ENVIAR</button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col w-[50%]">
            <div className="relative">
    <img src={Building} className="w-[80%] -z-10"/>
    <ul className="absolute inset-10 transform flex flex-col gap-6">
        <li className="flex flex-row items-center gap-4">
            <LocationIcon className="w-[30px] h-[30px] text-white"/>
            <p className="text-white">Rua Embarcados 161, Ijuí-RS 987000-000 - Brazil</p>
        </li>
        <li className="flex flex-row items-center gap-4">
            <MailIcon className="w-[30px] h-[30px] text-white"/>
            <p className="text-white">atendimento@airtrack.com.br</p>
        </li>
        <li className="flex flex-row items-center gap-4">
            <CallIcon className="w-[30px] h-[30px] text-white"/>
            <p className="text-white">(55) 99999-9999</p>
        </li>
    </ul>
</div>
            </div>
        </div>
    )
}

export default Contact