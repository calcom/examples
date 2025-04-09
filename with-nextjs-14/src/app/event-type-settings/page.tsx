"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InfoContext } from "@/context/InfoContext";
import { EventTypeSettings, useEventTypes, useTeamEventTypes, useTeams } from "@calcom/atoms";
import { useContext, useState } from "react";

export default function EventTypeSettingsPage() {
  const { userDetails } = useContext(InfoContext);
  const { data: teams } = useTeams();
  const { data, isLoading, refetch } = useEventTypes(userDetails.username);
  const { data: teamEventTypes, isLoading: teamEventTypesIsLoading, refetch: refetchTeamEventTypes } = useTeamEventTypes(teams?.[0]?.id || 0);
  const [eventTypeId, setEventTypeId] = useState<number | null>(null);
  const allEventTypes = [...(data ?? []), ...(teamEventTypes ?? [])];
  return (
    <div className="flex flex-col items-center justify-center mt-8 gap-8">
      {data?.length === 0 && teamEventTypes?.length === 0 && <div>No events found. Please create some first!</div>}
      {isLoading && <div>Loading...</div>}
      {allEventTypes && allEventTypes.length > 0 &&
        <div className="max-w-3xl flex gap-5">
          <Select onValueChange={(value) => {
            const eventTypeId = parseInt(value);
            setEventTypeId(eventTypeId)
            }
          }>
            <SelectTrigger>
              <SelectValue placeholder="Select Event Type" />
            </SelectTrigger>
            <SelectContent>
              {allEventTypes.map((item) => (
                <SelectItem value={`${item.id}`} key={item.id}>
                  {item.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      }
      <div className="max-w-9/10">
        {eventTypeId && (
          <EventTypeSettings
            id={eventTypeId}
            allowDelete
            key={eventTypeId}
            onDeleteSuccess={() => {
              alert("Successfully deleted event type");
              refetch();
            }}
            onDeleteError={() => {
              alert("Failed to delete event type");
            }}
            onError={() => {
              alert("Failed to update event type");
            }}
            onSuccess={() => {
              alert("Successfully updated event type");
              refetch();
            }}
          />
        )}
      </div>
    </div>
  )
}