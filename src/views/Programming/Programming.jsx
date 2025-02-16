import React from "react";
import Header from "../../components/Header/Header.jsx";
import ScoreKeeper from "../../components/ScoreKeeper/ScoreKeeper.jsx";
import "./Programming.css"; 

function Programming() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-bl from-blue-900 to-purple-800">
            <Header/>
            <main className="flex-grow flex items-center justify-center p-8">
                <div className="w-full max-w-4xl">
                    <ScoreKeeper/>
                </div>
            </main>
            <footer className="bg-indigo-900 text-white text-center p-6 mt-auto border-t border-indigo-700">
                <p className="text-lg">&copy; 2025 Chain Pulse. All rights reserved.</p>
            </footer>
        </div>


    );
}

export default Programming;
