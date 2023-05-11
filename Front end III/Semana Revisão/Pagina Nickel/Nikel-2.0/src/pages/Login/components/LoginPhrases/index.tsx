import { Box, Typography } from "@mui/material"
import { PhrasesProps } from "../.."

interface LoginPhrasesProps {
  phrases: PhrasesProps[]
}

const LoginPhrases: React.FC<LoginPhrasesProps> = ({phrases}) => {
    return (
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'flex-start'
        }}
        gap={2}
        >
          {phrases.map(({ phrase }) => {
            return(
              <Typography variant="h6" color={'white'} component={'p'}>{phrase}.</Typography>
            )
          })}
        </Box>
    )
}

export default LoginPhrases;

