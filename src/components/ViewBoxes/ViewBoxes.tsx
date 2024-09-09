import { useRef } from "react";

import { useFrames } from "@/hooks/useFrames";

import { useVideoPlayerRef } from "../VideoPlayer/VideoPlayer";
import style from "./ViewBoxes.module.scss";

export default function ViewBoxes() {
  const videoRef = useVideoPlayerRef();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useFrames(() => {
    const { current: video } = videoRef;
    const { current: canvas } = canvasRef;
    const ctx = canvas?.getContext('2d');

    if (!video || !canvas || !ctx) {
      return;
    }

    if (
      canvas.width !== video.videoWidth
      ||
      canvas.height !== video.videoHeight
    ) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';

    ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2);

    const currentTime = video.currentTime ?? 0;

    // console.log(currentTime);
  });


  return (
    <canvas ref={canvasRef} className={style.canvas} />
  );
}