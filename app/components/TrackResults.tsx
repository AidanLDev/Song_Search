import { ITrack } from "@/interfaces/tracks";
import { Box, Typography } from "@mui/material";
import React from "react";

interface ITrackResultsProps {
  activeTracks: ITrack | ITrack[];
}

export const TrackResults = ({ activeTracks }: ITrackResultsProps) => {
  const isSingleTrack = !Array.isArray(activeTracks);
  return (
    <Box mt={2}>
      <Box
        sx={{
          color: "primary",
          position: "relative",
        }}
      >
        <Box display="flex" gap={1} my={1}>
          <TitleText title="Artist: " />
          <Typography color="secondary" fontWeight={600}>
            {isSingleTrack ? activeTracks.artist : activeTracks[0].artist}
          </Typography>
        </Box>
        <Box my={1}>
          <TitleText
            title={
              isSingleTrack || (!isSingleTrack && activeTracks.length === 1)
                ? "Song:"
                : "Songs: "
            }
          />
          {isSingleTrack ? (
            <TrackText track={activeTracks.title} />
          ) : (
            activeTracks.map((track) => (
              <TrackText key={track.id} track={track.title} />
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};

const TitleText = ({ title }: { title: string }) => (
  <Typography color="primary" fontWeight={600}>
    {title}
  </Typography>
);

const TrackText = ({ track }: { track: string }) => (
  <Typography color="secondary">{track}</Typography>
);
