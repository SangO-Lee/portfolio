import { useEffect, useState } from "react";

function ToastMessage({ message, icon, time }) {
    const [isActive, setIsActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (time) {
            setIsActive(true);
            setIsVisible(true);
            const hideMessage = setTimeout(() => {
                setIsActive(false);
            }, 2000);
            const hideVisibility = setTimeout(() => {
                setIsVisible(false);
            }, 2500);

            return () => {
                clearTimeout(hideMessage);
                clearTimeout(hideVisibility);
            };
        }
    }, [time]);

    return (
        <div
            id="toast-message"
            className={`${isActive ? "active" : "fade"}`}
            style={{ visibility: isVisible ? "visible" : "hidden" }}
        >
            <div className="inner">
                <p className="message">
                    {icon && (
                        <span className="icon material-symbols-outlined">
                            {icon}
                        </span>
                    )}
                    <span className="value">{message}</span>
                </p>
            </div>
        </div>
    );
}

export default ToastMessage;
