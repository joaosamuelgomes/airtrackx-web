import SensorIcon from "../assets/sensor.svg?react"
import NotificacaoIcon from "../assets/notification.svg?react"
import RelatorioIcon from "../assets/relatory.svg?react"
import SuporteIcon from "../assets/support.svg?react"

const Plans = () => {
    return (
        <div className="flex flex-col bg-white">
            <h2 id="plans" className="font-bebas text-4xl items-center pt-8 px-32 text-p1 mt-32">PLANOS</h2>
            <p className="font-ubuntu text-lg mt-6 px-32 text-p3">Ao escolher entre o Plano Standard e o Plano Premium, você pode selecionar a opção que melhor atende às suas necessidades específicas de monitoramento da qualidade do ar.</p>
            <div className="flex flex-row gap-10 items-center justify-center mt-6 z-10">
                <div className="bg-c12 p-8 w-[30%] rounded">
                    <h3 className="font-ubuntu text-4xl">Plano Standard</h3>
                    <ul className="mt-6 text-c3 font-ubuntu">
                        <li className="flex flex-row items-center gap-4">
                            <SensorIcon className="text-c3 w-[30px] h-[30px]"/>
                            <p>2 sensores de ar incluídos</p>
                        </li>
                        <li className="flex flex-row items-center gap-4">
                            <NotificacaoIcon className="text-c3 w-[30px] h-[30px]"/>
                            <p>notificação em tempo real</p>
                        </li>
                        <li className="flex flex-row items-center gap-4">
                            <RelatorioIcon className="text-c3 w-[30px] h-[30px]"/>
                            <p>relatórios periódicos</p>
                        </li>
                        <li className="flex flex-row items-center gap-4">
                            <SuporteIcon className="text-c3 w-[30px] h-[30px]"/>
                            <p>suporte ao cliente</p>
                        </li>
                    </ul>
                    <div className="flex flex-row justify-between items-center mt-4">
                        <div className="flex flex-row gap-2 items-end font-ubuntu">
                            <h4 className="text-4xl">R$ 69</h4>
                            <p className="text-md">/mês</p>
                        </div>
                        <button className="bg-p5 hover:bg-p3 px-4 py-2 rounded text-c12">ASSINAR</button>
                    </div>
                </div>
                <div className="bg-p5 p-8 w-[30%] rounded">
                    <h3 className="font-ubuntu text-4xl">Plano Premium</h3>
                    <ul className="mt-6 text-c3 font-ubuntu">
                        <li className="flex flex-row items-center gap-4">
                            <SensorIcon className="text-c3 w-[30px] h-[30px]"/>
                            <p>6 sensores de ar incluídos</p>
                        </li>
                        <li className="flex flex-row items-center gap-4">
                            <NotificacaoIcon className="text-c3 w-[30px] h-[30px]"/>
                            <p>notificação em tempo real</p>
                        </li>
                        <li className="flex flex-row items-center gap-4">
                            <RelatorioIcon className="text-c3 w-[30px] h-[30px]"/>
                            <p>relatórios avançados</p>
                        </li>
                        <li className="flex flex-row items-center gap-4">
                            <SuporteIcon className="text-c3 w-[30px] h-[30px]"/>
                            <p>suporte prioritário ao cliente</p>
                        </li>
                    </ul>
                    <div className="flex flex-row justify-between items-center mt-4">
                        <div className="flex flex-row gap-2 items-end font-ubuntu">
                            <h4 className="text-4xl">R$ 99</h4>
                            <p className="text-md">/mês</p>
                        </div>
                        <button className="bg-c12 hover:bg-c6 hover:text-white px-4 py-2 rounded">ASSINAR</button>
                    </div>
                </div>
            </div>
            <div className="w-full bg-p1 h-[240px] mt-[-100px]"></div>
        </div>
    )
}

export default Plans