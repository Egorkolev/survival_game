import {RefObject, useEffect, useState} from "react";
import {Game} from "@/game/Game";

export const useGame = (canvasRef: RefObject<HTMLCanvasElement | null>) => {
    const [game, setGame] = useState<Game | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return

        const game = new Game(canvasRef);

        const resizeObserver = new ResizeObserver(() => {
            // todo: game.resize() or something
        })

        if (canvasRef.current.parentElement) {
            resizeObserver.observe(canvasRef.current.parentElement)
        }

        return () => {
            resizeObserver.disconnect()
        }
    })
}