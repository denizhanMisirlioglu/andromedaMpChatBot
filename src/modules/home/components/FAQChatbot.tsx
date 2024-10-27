import React, { useState } from 'react';

const faqData = [
    { question: "What is this marketplace?", answer: "This marketplace allows you to buy, sell, and auction digital assets." },
    // ... other questions
];

const FAQChatbot = () => {
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

    const handleQuestionClick = (index: number) => {
        setSelectedQuestion(selectedQuestion === index ? null : index);
    };

    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', width: '300px', backgroundColor: '#ffffff', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h2 style={{ fontSize: '18px', marginBottom: '8px', fontWeight: 'bold' }}>FAQ Chatbot</h2>
            {faqData.map((item, index) => (
                <div key={index}>
                    <p onClick={() => handleQuestionClick(index)} style={{ cursor: 'pointer', fontWeight: 'bold', margin: '8px 0', color: selectedQuestion === index ? '#000' : '#555' }}>
                        {item.question}
                    </p>
                    {selectedQuestion === index && <p style={{ margin: '4px 0 12px', color: '#000' }}>{item.answer}</p>}
                </div>
            ))}
        </div>
    );
};

export default FAQChatbot;
