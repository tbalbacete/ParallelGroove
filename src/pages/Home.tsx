import { useArtistSearchDataTestResult } from "@/data";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const Home: React.FC = () => {
  const [searchString, setSearchString] = useState("");

  const artist = useArtistSearchDataTestResult(
    { artistName: searchString },
    { enabled: Boolean(searchString), suspense: false }
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSearchString(event.target.artistName.value);
  };

  return (
    <Box>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormLabel>ArtistName</FormLabel>
        <TextField id="artistName"></TextField>
        <Button type="submit">Submit</Button>
      </form>
      <Typography>{artist?.name}</Typography>
      <Typography>{artist?.id}</Typography>
    </Box>
  );
};
