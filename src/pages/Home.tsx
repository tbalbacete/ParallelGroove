import { useArtistSearchDataTestResult } from "@/data";
import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { useState } from "react";

export const Home: React.FC = () => {
    const api = SpotifyApi.withClientCredentials("f5b8da656ecb43698757c6b25a7d1c89", "74773cc5b59c4be7a0bf585a3b959419");
    const [searchString, setSearchString] = useState("");

    const artist = useArtistSearchDataTestResult({artistName: searchString}, {enabled: Boolean(searchString), suspense: false})

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(event.target.artistName.value);
        setSearchString(event.target.artistName.value);
    }

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
  )
}