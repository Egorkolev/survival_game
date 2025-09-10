'use client';
import {useRef} from "react";
import {useGame} from "@/game/useGame";

export function GameComponent() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useGame(canvasRef);

    return (
        <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="border-2 border-gray-600 rounded-lg overflow-hidden">
                <canvas id="game-container" ref={canvasRef} className='block' />
            </div>
        </div>
    );
}

