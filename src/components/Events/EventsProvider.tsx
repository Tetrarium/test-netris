import { createContext, PropsWithChildren, useContext } from "react";

import useFetch from "@/hooks/useFetch";

export interface EventData {
  timestamp: number;
  duration: number;
  zone: {
    "left": number;
    "top": number;
    "width": number;
    "height": number;
  };
}

const EventsContext = createContext<EventData[] | null>(null);

export type EventProviderProps = {
  url: string;
} & PropsWithChildren;

export const useEventContext = () => {
  const data = useContext(EventsContext);
  if (!data) {
    throw new Error('No events context provided');
  }

  return data;
};

export function EventsContextProvider({ url, children }: EventProviderProps) {
  const { data, isLoading, error } = useFetch<EventData[]>(url);

  if (!data) {
    return;
  }

  if (isLoading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <EventsContext.Provider value={data}>
      {children}
    </EventsContext.Provider>
  );
}