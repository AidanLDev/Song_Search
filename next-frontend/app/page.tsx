import Image from 'next/image'
import styles from './page.module.css'
import data from "../public/data/tracks.json";
import { getAllArtists, getByTitle, getByArtist } from "@/utils/AppUtils";

export default async function Home() {
  const allArtists = getAllArtists(data.tracks);
  const getTrack = getByTitle(data.tracks, "Cold Harbour Woman");
  const artist = getByArtist(data.tracks, "3am");

  return (
    <main className={styles.main}>
      <ul>
        {allArtists.map((artist, idx) => (
          <li key={`${artist}__${idx}`}>{artist}</li>
        ))}
      </ul>
    </main>
  );
}
