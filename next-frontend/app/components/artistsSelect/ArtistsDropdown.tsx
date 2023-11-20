import { Menu, MenuItem } from "@mui/material";

interface IArtistDropdownProps {
  artists: string[];
  open: boolean;
  close: () => void;
  selectArtist: (artist: string) => void;
  anchorEl: null | HTMLElement;
}

export const ArtistsDropdown = ({
  artists,
  open,
  close,
  selectArtist,
  anchorEl,
}: IArtistDropdownProps) => {
  return (
    <Menu
      open={open}
      onClose={close}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
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
