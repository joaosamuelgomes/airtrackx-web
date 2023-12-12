import { useState, useEffect } from "react";
import mqtt from "mqtt";

import ProgressCircle from "./progresscircle";

const AirQuality = () => {
    const [quality, setQuality] = useState(""); 

    useEffect(() => {
        const client = mqtt.connect("mqtt://seu_servidor_mqtt"); // Substitua pelo endereço do seu servidor MQTT

        client.on("connect", () => {
            client.subscribe("topico/qualidade_ar"); // Substitua pelo tópico MQTT apropriado
        });

        client.on("message", (topic, message) => {
            // Quando uma mensagem é recebida no tópico MQTT
            if (topic === "topico/qualidade_ar") {
                // Parse ou manipule a mensagem recebida, se necessário
                const newQuality = message.toString(); // Supondo que a mensagem seja uma string representando a qualidade do ar
                setQuality(newQuality);
            }
        });

        return () => {
            client.end(); // Desconecte o cliente MQTT quando o componente for desmontado
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-white">
            <div className="flex flex-col items-center top-0 w-full h-80 bg-p1">
                <p className="text-2xl mt-10 mb-10 font-ubuntu text-white text-center w-[50%]">
                    A VIDA É UMA PEÇA DE TEATRO QUE NÃO PERMITE ENSAIOS.
                </p>
                <ProgressCircle quality={quality} />
                <p className="text-2xl text-center text-p1 mt-10 w-[50%]">
                    A QUALIDADE DO AR QUE VOCÊ RESPIRA INFLUENCIA NO SEU RESULTADO.
                </p>
            </div>
        </div>
    );
};

export default AirQuality;
