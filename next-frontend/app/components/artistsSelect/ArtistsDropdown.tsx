import { Menu, MenuItem } from "@mui/material";

interface IArtistDropdownProps {
  artists: string[];
  open: boolean;
  close: () => void;
  selectArtist: (artist: string) => void;
}

export const ArtistsDropdown = ({
  artists,
  open,
  close,
  selectArtist,
}: IArtistDropdownProps) => {
  return (
    <Menu open={open} onClose={close}>
      {artists.map((artist, idx) => (
        <MenuItem
          key={`${artist}__${idx}`}
          onClick={() => selectArtist(artists[idx])}
        >
          {artist}
        </MenuItem>
      ))}
    </Menu>
  );
};
