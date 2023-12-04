import PropTypes from "prop-types";

const ProgressCircle = ({ percentage }) => {

    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const getQualityText = () => {
        if (percentage >= 0 && percentage < 25) {
        return "Péssimo";
        } else if (percentage >= 25 && percentage < 50) {
        return "Ruim";
        } else if (percentage >= 50 && percentage < 70) {
        return "Regular";
        } else if (percentage >= 70 && percentage < 90) {
        return "Boa";
        } else {
        return "Excelente";
        }
    };

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
                strokeDashoffset={strokeDashoffset}
                strokeWidth="6"
                transform="rotate(-90 50 50)"
            ></circle>
            <text x="50%" y="50%"  style={{ fill: '#253544', fontSize: '14px' }} textAnchor="middle" dominantBaseline="middle">
                {getQualityText()}
            </text>
        </svg>
    </div>
    );
};

ProgressCircle.propTypes = {
    percentage: PropTypes.number.isRequired,
};

export default ProgressCircle;