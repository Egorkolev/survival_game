'use client';
import {useRef} from "react";
import {useGame} from "@/game/useGame";

export function GameComponent() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useGame(canvasRef);

    return (
        <div className="">
            <canvas id="game-container" ref={canvasRef} className='w-full h-full' />
        </div>
    );
}

