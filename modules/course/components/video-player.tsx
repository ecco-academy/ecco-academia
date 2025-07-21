"use client";
import dynamic from "next/dynamic";
import { ReactPlayerProps } from "react-player";
const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});
export default function VideoPlayer(props: ReactPlayerProps) {
  return <ReactPlayer {...props} />;
}
