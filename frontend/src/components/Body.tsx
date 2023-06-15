import React, { useState } from 'react';

import Input from './ui/Input';
import Button from './ui/Button';
import List from './ui/List';
import Heading from './Heading';
import { Select } from '@chakra-ui/react';
import { useData } from '../hooks/useData';

const Body: React.FC = () => {
  const [songId, setSongId] = useState<string>('');
  const [searchedSong, setSearchedSong] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [titles, setTitles] = useState<string[]>([]);
  const [artist, setArtist] = useState<string>('');
  const [notFound, setNotFound] = useState<boolean>(false);

  const onIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;
    setSongId(inputValue);
  };

  // TODO: Change this into one handleInput function that checks eve
  const onArtistChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue: string = event.target.value;
    setSearchedSong(inputValue);
  };

  const getTrackById = () => {
    fetch(`${window.location.origin}/songs/id/${songId}`)
      .then(res => res.text())
      .then(res => {
        try {
          const trackObject = JSON.parse(res);
          if (trackObject.length > 0) {
            setNotFound(false);
            setArtist(trackObject[0].artist);
            setTitle(trackObject[0].title);
            setTitles([]);
          } else {
            setNotFound(true);
          }
        } catch {
          setNotFound(true);
        }
      });
  };

  const getTracksByArtist = () => {
    fetch(`${window.location.origin}/songs/getartist/${searchedSong}`)
      .then(res => res.text())
      .then(res => {
        try {
          const trackObject = JSON.parse(res);
          if (trackObject.length > 0) {
            const titlesArray: string[] = [];
            trackObject.forEach((track: { title: any }) => {
              titlesArray.push(track.title);
            });
            setNotFound(false);
            setArtist(trackObject[0].artist);
            setTitles(titlesArray);
          } else {
            setNotFound(true);
          }
        } catch {
          setNotFound(true);
        }
      });
  };

  type TrackObjectKeys = 'artist' | 'title' | 'number';

  const allTracks: Promise<
    Record<
      TrackObjectKeys,
      { artist: string; title: string; id: number }[]
    >
  > = useData(`${window.location.origin}/songs/all`) || [];
  console.log(allTracks);

  const uniqueArtists: string[] = [
    ...new Set(
      allTracks.map((track: { artist: any }) => track.artist)
    ),
  ];
  console.log(uniqueArtists);

  return (
    <div className='masthead'>
      <div className='container h-100'>
        <div className='row h-100 align-items-center justify-content-center text-center'>
          <Heading headingText='Music Library' />
          <div className='col-lg-8 align-self-baseline'>
            <p className='text-white-75 font-weight-meduim mb-5'>
              Search our music catalog
            </p>
            <p className='text-white-75 font-weight-light'>
              IDs range from 1 - 500
            </p>
            <Input
              handleChange={onIdChange}
              inputValue={songId}
              inputLabel='Search via Id'
              inputType='number'
            />
            <Button handleClick={getTrackById} buttonLabel='Search' />
            <br />
            {/* <Input
              handleChange={onArtistChange}
              inputValue={searchedSong}
              inputLabel='Search Artist'
            /> */}
            <div className='artist-select'>
              <Select
                placeholder='Select Artist'
                colorScheme='#f4623a'
                onChange={(e: { target: { value: any } }) =>
                  setSearchedSong(e.target.value)
                }
              >
                {uniqueArtists.map((artist, idx) => (
                  <option key={`${idx}__${artist}`} value={artist}>
                    {artist}
                  </option>
                ))}
              </Select>
              <Button
                handleClick={getTracksByArtist}
                buttonLabel='Search'
              />
            </div>
            <div className='text-white-75 font-weight-light mb-5'>
              {artist && !notFound ? (
                <div>
                  Artist:
                  <p className='text-primary padding-right'>
                    {' '}
                    {artist}
                  </p>
                  {titles.length > 1
                    ? 'Song Titles: '
                    : 'Song Title: '}
                  <span className='text-primary'>
                    {' '}
                    {titles.length > 1 ? (
                      <List listItems={titles} />
                    ) : (
                      title || titles
                    )}
                  </span>
                </div>
              ) : (
                ''
              )}
              {notFound && <p>Track not found</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
