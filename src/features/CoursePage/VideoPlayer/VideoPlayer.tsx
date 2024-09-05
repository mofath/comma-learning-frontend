import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import styles from "./VideoPlayer.module.css";

interface VideoPlayerProps {
    videoUrl: string;
    poster?: string;
    onTimeUpdate?: (timestamp: string) => void;
}

export interface VideoPlayerHandle {
    pause: () => void;
}

const VideoPlayer = forwardRef<VideoPlayerHandle, VideoPlayerProps>(
    ({ videoUrl, poster, onTimeUpdate }, ref) => {
        const videoRef = useRef<HTMLVideoElement>(null);

        useImperativeHandle(ref, () => ({
            pause: () => {
                videoRef.current?.pause();
            }
        }));

        useEffect(() => {
            const videoElement = videoRef.current;
            const handleTimeUpdate = () => {
                if (videoElement && onTimeUpdate) {
                    const currentTime = videoElement.currentTime;
                    const minutes = Math.floor(currentTime / 60);
                    const seconds = Math.floor(currentTime % 60);
                    const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
                    onTimeUpdate(formattedTime);
                }
            };

            if (videoElement) {
                videoElement.addEventListener("timeupdate", handleTimeUpdate);
            }

            return () => {
                if (videoElement) {
                    videoElement.removeEventListener("timeupdate", handleTimeUpdate);
                }
            };
        }, [onTimeUpdate]);

        return (
            <video
                ref={videoRef}
                controlsList="nodownload"
                controls
                key={videoUrl}
                className={styles["video-player__video"]}
                poster={poster}
            >
                <source src={videoUrl} type="video/mp4" />
            </video>
        );
    }
);

export default VideoPlayer;
