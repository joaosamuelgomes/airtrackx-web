import { useState, useEffect } from "react";
import mqtt from "mqtt";

import ProgressCircle from "./progresscircle";

const AirQuality = () => {
    const [quality, setQuality] = useState(""); 

    useEffect(() => {
        // Conectando ao mesmo servidor MQTT que o Arduino
        const client = mqtt.connect("mqtt://test.mosquitto.org:8080");

        client.on("connect", () => {
            // Assinando o mesmo tópico MQTT que o Arduino está publicando
            client.subscribe("qualidadeAr");
        });

        client.on("message", (topic, message) => {
            if (topic === "qualidadeAr") {
                let newQuality = message.toString();
        
                // Garantindo que newQuality seja um dos valores esperados
                const validQualities = ["Ruim", "Moderada", "Boa", "Excelente"];
                newQuality = validQualities.includes(newQuality) ? newQuality : ""; // Se não for válido, define como vazio
        
                setQuality(newQuality);
            }
        });

        return () => {
            client.end(); // Desconectando o cliente MQTT quando o componente for desmontado
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
