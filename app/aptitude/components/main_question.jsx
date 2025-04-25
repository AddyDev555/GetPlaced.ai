import React, { useState } from 'react'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});
export default function MainQuestion({ aptData, topic, setTopic }) {
    const topicData = aptData.filter(item => item.Topic === topic.name);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [correctAnswers, setCorrectAnswers] = useState({});
    const [isSolution, setIsSolution] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const questionsPerPage = 5;

    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = topicData.slice(indexOfFirstQuestion, indexOfLastQuestion);

    const totalPages = Math.ceil(topicData.length / questionsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };


    function checkAns(questionIndex, clickedOption, actualAns) {
        const actual = actualAns?.toLowerCase();

        if (clickedOption === actual) {
            setCorrectAnswers((prev) => ({ ...prev, [questionIndex]: clickedOption }));
        } else {
            setSelectedAnswers((prev) => {
                const prevWrongOptions = prev[questionIndex] || [];
                if (!prevWrongOptions.includes(clickedOption)) {
                    return {
                        ...prev,
                        [questionIndex]: [...prevWrongOptions, clickedOption]
                    };
                }
                return prev;
            });
        }
    }

    const formatBoldText = (text) => {
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return parts.map((part, index) =>
            index % 2 === 1 ? <strong key={index}>{part}</strong> : part
        );
    };

    function renderFormattedFraction(text) {
        if (!text.includes('\n')) return text;

        const [numerator, denominator] = text.split('\n');

        return (
            <span className="inline-block text-center leading-tight align-middle">
                <div className="border-b border-black px-1">{numerator}</div>
                <div>{denominator}</div>
            </span>
        );
    }

    return (
        <div>
            <div className='flex'>
                <div>
                    <div>
                        <p className='text-sm cursor-pointer text-gray-400 mb-2'><span className='hover:text-yellow-400' onClick={() => setTopic(null)}>/Arithmetic</span>/{topic.name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className={`fi ${topic.logo} relative top-0.5 text-xl text-yellow-400`}></i>
                        <h2 className="font-semibold text-xl">{topic.name}</h2>
                    </div>
                    <p className="text-gray-400 my-1 text-sm">{topic.subTitle}</p>
                </div>

                <div className='ml-auto mr-4'>
                    <i className="fi fi-rr-calculator text-2xl cursor-pointer"></i>
                </div>
            </div>

            <div className="mt-2 space-y-2">
                {currentQuestions.length > 0 ? (
                    currentQuestions.map((item, index) => {
                        const actualIndex = indexOfFirstQuestion + index;
                        return(
                        <div key={actualIndex} className={`p-4 border rounded shadow ${roboto.className}`}>
                            <div className="text-[0.9rem] font-medium">
                                Q{actualIndex + 1}. {renderFormattedFraction(item.Question)}
                            </div>

                            <div className="grid grid-cols-2 gap-2 mt-4 pl-6">
                                {Object.entries(item)
                                    .filter(([key, value]) => key.startsWith("Option") && value)
                                    .map(([key, value]) => {
                                        const optionKey = key.replace("Option ", "");
                                        const optionKeyLower = optionKey.toLowerCase();

                                        const isCorrect = correctAnswers[index] === optionKeyLower;
                                        const isWrong = selectedAnswers[index]?.includes(optionKeyLower);
                                        const isAnsweredCorrectly = !!correctAnswers[index];

                                        return (
                                            <div
                                                key={key}
                                                className={`text-sm flex items-center cursor-pointer transition-all duration-200 ${isAnsweredCorrectly ? "pointer-events-none" : ""
                                                    }`}
                                                onClick={() =>
                                                    !isAnsweredCorrectly &&
                                                    checkAns(index, optionKeyLower, item.Answer)
                                                }
                                            >
                                                <span className="font-semibold bg-yellow-100 rounded-3xl px-1.5 py-0.3 hover:bg-yellow-200 mr-2 border-2 border-gray-400">
                                                    {optionKey}
                                                </span>
                                                <div className={`${isWrong ? "text-red-500" : ""}
                                                    ${isCorrect ? "text-green-600 font-semibold" : ""}
                                                `}>{renderFormattedFraction(value)}</div>

                                                {isCorrect && (
                                                    <i className="fi fi-rr-check text-green-600 bg-green-200 rounded-3xl pt-1 px-1 ml-2"></i>
                                                )}
                                            </div>
                                        );
                                    })}
                            </div>

                            <div className="mt-6 pl-7">
                                <i onClick={() =>
                                    setIsSolution(prev => ({
                                        ...prev,
                                        [index]: !prev[index]
                                    }))
                                } className="fi fi-rs-book-alt cursor-pointer text-green-600"></i>
                            </div>

                            {isSolution[index] &&
                                <div className='text-sm px-6.5 text-justify'>
                                    <p className='mt-2'><span className='text-green-600 font-semibold'>Correct Answer:</span> <span className='font-semibold'>{item.Answer?.toUpperCase()}</span></p>
                                    <p className='text-green-600 font-semibold'>Solution</p>
                                    {formatBoldText(item.Solution)}
                                </div>
                            }
                        </div>
                        );
                    })
                ) : (
                    <p className="text-gray-500 text-sm">No questions for this topic.</p>
                )}
            </div>
            
            {totalPages > 1 && (
                <div className="flex justify-center items-center mt-6 gap-4">
                    <button
                        className="px-3 py-1 rounded bg-yellow-300 hover:bg-yellow-400 text-sm disabled:opacity-50"
                        onClick={goToPrevPage}
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>
                    <span className="text-sm font-medium">Page {currentPage} of {totalPages}</span>
                    <button
                        className="px-3 py-1 rounded bg-yellow-300 hover:bg-yellow-400 text-sm disabled:opacity-50"
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}