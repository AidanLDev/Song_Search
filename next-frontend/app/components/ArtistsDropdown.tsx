import { Menu, MenuItem } from "@mui/material";

interface IArtistDropdownProps {
  artists: string[];
  open: boolean;
}

export const ArtistsDropdown = ({ artists, open }: IArtistDropdownProps) => {
  return (
    <Menu open={open}>
      {artists.map((artist, idx) => (
        <MenuItem key={`${artist}__${idx}`}>{artist}</MenuItem>
      ))}
    </Menu>
  );
};
