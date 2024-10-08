import { useEffect } from "react";

import { FrameListener, frames } from "@/library/frames";

import { useEvent } from "./useEvent";

export const useFrames = <T extends FrameListener>(fn: T) => {
  const eventFn = useEvent(fn);
  useEffect(() => frames(eventFn), []);
};