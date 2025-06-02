import React from "react";

function Banner({message}) {

  if (!message) {
        return null;
    }
const animationKey = message;
    return (
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-2 text-sm font-medium overflow-hidden">
            {/* ¡Aquí es donde va el mensaje! */}
            <span key={animationKey} className="inline-block whitespace-nowrap animate-marquee">
                {message}
            </span>
        </div>
    );
}

export default Banner;