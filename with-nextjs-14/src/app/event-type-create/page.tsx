"use client";

import { InfoContext } from "@/context/InfoContext";
import { CreateEventType, useEventTypes, useTeamEventTypes, useTeams } from "@calcom/atoms";
import { useContext } from "react";

export default function CreateEventTypePage() {
  const { userDetails } = useContext(InfoContext);
  const { data, refetch, isLoading, isRefetching } = useEventTypes(userDetails.username);
  const { data: teams } = useTeams();
  const {
    isLoading: isTeamsEventTypesLoading,
    data: teamsEventTypes,
    refetch: refetchTeamsEventTypes,
    isRefetching: isTeamsEventTypesRefetching
  } = useTeamEventTypes(teams?.[0]?.id || 0);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-semibold text-xl mb-4 flex flex-col gap-4">
        {(isLoading || isTeamsEventTypesLoading) && "Loading Event Types..."}
        {(isRefetching || isTeamsEventTypesRefetching) && "Refetching Event Types..."}
        {!isLoading && !isRefetching && data && data.length === 0 && "You don't have any event type created"}
      </div>
      <div className="flex-col md:flex-row flex w-full">
        <div className="flex-1 flex flex-col justify-center items-center p-5">
          {!isRefetching && data && data.length > 0 && (
            <div>
              <div className="font-semibold text-xl">Your Event Types</div>
              <ol className="list-disc">
                {data.map((eventType) => (
                  <li key={eventType.id}>{eventType.title}</li>
                ))}
              </ol>
            </div>
          )}
          <div className="mt-8 font-semibold text-xl">Create Event Type</div>
          <CreateEventType
            customClassNames={{
              atomsWrapper: "max-w-3xl"
            }}
            onSuccess={(eventType) => {
              alert(`Event type created: ${eventType.title} 🚀🚀`);
              refetch();
            }}
            onError={(err) => {
              alert(`Error creating Event Type 😲`);
            }}
          />
        </div>
        {!!teams && (
          <div className="flex-1 flex flex-col justify-center items-center p-5">
            {!!teams && !isTeamsEventTypesLoading && teamsEventTypes && teamsEventTypes.length === 0 && "You don't have any event type created for your team"}
            {!!teams && !isTeamsEventTypesLoading && teamsEventTypes && teamsEventTypes.length > 0 && (
              <div>
                <div className="font-semibold text-xl">Your Team Event Types</div>
                <ol className="list-disc">
                  {teamsEventTypes.map((eventType) => (
                    <li key={eventType.id}>{eventType.title}</li>
                  ))}
                </ol>
              </div>
            )}
            {!!teams && teams?.[0]?.id && (
              <>
                <div className="mt-8 font-semibold text-xl">Create Team Event Type</div>
                <CreateEventType
                  teamId={teams?.[0].id}
                  customClassNames={{
                    atomsWrapper: "max-w-3xl"
                  }}
                  onSuccess={(eventType) => {
                    alert(`Team Event type created: ${eventType.title} 🚀🚀`);
                    refetchTeamsEventTypes();
                  }}
                  onError={(err) => {
                    alert(`Error creating Event Type 😲`);
                  }}
                />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
