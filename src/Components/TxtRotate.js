import React, { useState, useEffect } from 'react';

const TxtRotate = ({ rotateWords, period }) => {
    const [isDeleting, setIsDeleting] = useState(false); // State for deleting text
    const [text, setText] = useState(''); // Current text being typed
    const [loopNum, setLoopNum] = useState(0); // Keeps track of which word to display
    const [delta, setDelta] = useState(200); // Typing speed

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta); // Call the tick function at intervals defined by delta

        return () => clearInterval(ticker); // Clear the interval when unmounted
    }, [text]);

    const tick = () => {
        let i = loopNum % rotateWords.length; // Get the current word index
        let fullText = rotateWords[i]; // Current word to type
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1) // Delete one char at a time
            : fullText.substring(0, text.length + 1); // Type one char at a time

        setText(updatedText); // Update the displayed text

        if (!isDeleting && updatedText === fullText) {
            // Word fully typed
            setDelta(period); // Pause before starting to delete
            setIsDeleting(true); // Start deleting the text
        } else if (isDeleting && updatedText === '') {
            // Word fully deleted
            setIsDeleting(false); // Stop deleting
            setLoopNum(loopNum + 1); // Move to the next word
            setDelta(500); // Reset the typing speed
        } else {
            setDelta(isDeleting ? 100 : 200); // Set typing/deleting speed
        }
    };

    return <span className="wrap">{text}</span>; // Render the dynamic text
};

export default TxtRotate;
