"use client";
import Image from "next/image";
import styles from "./page.module.css";
import data from "../public/data/tracks.json";
import { getAllArtists, getByTitle, getByArtist } from "@/utils/AppUtils";
import { Button } from "@mui/material";
import { ArtistsDropdown } from "./components/ArtistsDropdown";
import { useState } from "react";

export default function Home() {
  const [openArtistsDropdown, setOpenArtistsDropdown] = useState(false);
  const allArtists = getAllArtists(data.tracks);
  const getTrack = getByTitle(data.tracks, "Cold Harbour Woman");
  const artist = getByArtist(data.tracks, "3am");

  return (
    <main className={styles.main}>
      <Button
        onClick={() =>
          setOpenArtistsDropdown((prevState) => prevState !== prevState)
        }
      >
        Select Artist
      </Button>
      <ArtistsDropdown artists={allArtists} open={openArtistsDropdown} />

      <ul>
        {allArtists.map((artist, idx) => (
          <li key={`${artist}__${idx}`}>{artist}</li>
        ))}
      </ul>
    </main>
  );
}
