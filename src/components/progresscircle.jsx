import PropTypes from "prop-types";
import { useEffect } from "react";

const ProgressCircle = ({ quality }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;

    let percentage = 0;

    const getQualityPercentage = (quality) => {
        switch (quality) {
            case "Ruim":
                percentage = 25;
                break;
            case "Moderada":
                percentage = 50;
                break;
            case "Boa":
                percentage = 75;
                break;
            case "Excelente":
                percentage = 100;
                break;
            default:
                percentage = 0;
        }
    };

    useEffect(() =>{
        getQualityPercentage(quality)
    },[getQualityPercentage])

    if (!quality) {
        // Se não houver valor para 'quality', renderize "Sem dados"
        return (
            <div className={`relative w-60 h-60`}>
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="text-gray-200 stroke-current"
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="transparent"
                        strokeWidth="6"
                    ></circle>
                    <circle
                        className={`stroke-current text-p5`}
                        cx="50"
                        cy="50"
                        r={radius}
                        fill="white"
                        strokeDasharray={circumference}
                        strokeDashoffset={(100 / 100) * circumference}
                        strokeWidth="6"
                        transform="rotate(-90 50 50)"
                    ></circle>
                    <text x="50%" y="50%" style={{ fill: '#253544', fontSize: '14px' }} textAnchor="middle" dominantBaseline="middle">
                        Sem dados
                    </text>
                </svg>
            </div>
        );
    }

    return (
        <div className={`relative w-60 h-60`}>
            <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                    className="text-gray-200 stroke-current"
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="transparent"
                    strokeWidth="6"
                ></circle>
                <circle
                    className={`stroke-current text-p5`}
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="white"
                    strokeDasharray={circumference}
                    strokeDashoffset={(percentage / 100) * circumference}
                    strokeWidth="6"
                    transform="rotate(-90 50 50)"
                ></circle>
                <text x="50%" y="50%" style={{ fill: '#253544', fontSize: '14px' }} textAnchor="middle" dominantBaseline="middle">
                    {quality}
                </text>
            </svg>
        </div>
    );
};

ProgressCircle.propTypes = {
    quality: PropTypes.oneOf(["Ruim", "Moderada", "Boa", "Excelente", ""]).isRequired,
};

export default ProgressCircle;
