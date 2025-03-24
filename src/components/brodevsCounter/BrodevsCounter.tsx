import { useEffect, useState } from "react";
import "./brodevsCounter.css";

interface CounterProps {
    number: number;
    className?: string;
    duration?: number;
}

const BrodevsCounter: React.FC<CounterProps> = ({ className = '', number, duration = 2000 }) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        if (count < number) {
            const increment = Math.ceil(number / (duration / 50));
            const interval = setInterval(() => {
                setCount((prev) => (prev + increment >= number ? number : prev + increment));
            }, 50);

            return () => clearInterval(interval);
        }
    }, [count, number, duration]);

    return <span className={className}>{count}</span>;
};

export default BrodevsCounter;
