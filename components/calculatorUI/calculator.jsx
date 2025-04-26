import { useState } from "react";

const Calculator = () => {
    const [input, setInput] = useState("");

    const handleButtonClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClearAll = () => {
        setInput("");
    };

    const handleClearOne = () => {
        setInput((prev) => prev.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            const result = eval(input); // Only for basic safe calculations
            setInput(result.toString());
        } catch (error) {
            setInput("Error");
        }
    };

    return (
        <div className="w-70 p-4 bg-white rounded-xl shadow-md">
            <div className="mb-4">
                <input
                    type="text"
                    value={input}
                    readOnly
                    className="w-full text-right p-3 text-xl rounded-md border"
                    placeholder="0"
                />
            </div>
            <div className="grid grid-cols-4 gap-2">
                {/* Number and operator buttons */}
                {["7", "8", "9", "/",
                  "4", "5", "6", "*",
                  "1", "2", "3", "-",
                  "0", ".", "%", "+"].map((btn) => (
                    <button
                        key={btn}
                        className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 text-lg"
                        onClick={() => handleButtonClick(btn)}
                    >
                        {btn}
                    </button>
                ))}

                {/* CA, C, and = buttons */}
                <button
                    className="p-3 bg-red-400 text-white rounded-md hover:bg-red-500 text-lg"
                    onClick={handleClearAll}
                >
                    CA
                </button>
                <button
                    className="p-3 bg-orange-400 text-white rounded-md hover:bg-orange-500 text-lg"
                    onClick={handleClearOne}
                >
                    C
                </button>
                <button
                    className="col-span-2 p-3 bg-green-400 text-white rounded-md hover:bg-green-500 text-lg"
                    onClick={handleCalculate}
                >
                    Enter
                </button>
            </div>
        </div>
    );
};

export default Calculator;