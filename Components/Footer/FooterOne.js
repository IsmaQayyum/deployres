import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//Icons
import {   FacebookIcon, TwitterIcon, BehaceIcon } from "Utilis/Icons";
import GitHubIcon from '@mui/icons-material/GitHub';

//Logo
import Logo from "Assets/header/logo.png";

//Styles
import styles from "Styles/Footer/FooterOne.styles";

const FooterOne = () => {
    return (
        <Box>
            <Box sx={{ mb: "30px" }}>
            <h2>Codified Labs</h2>
            </Box>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <PlaceIcon />
                </Box>
                <Box>
                    <Typography variant="body1" component="p">
                     گرلڈ مائین سنٹر,Floor # 5 Office # 17 Ichhra Lahore, Punjab 54000
                    </Typography>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <EmailIcon/>
                </Box>
                <Box>
                    <Link href="mailto:talhashahzad975@gmail.com">
                        <a>
                            <Typography variant="body1" component="p">
                    talhashahzad975@gmail.com
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <LocalPhoneIcon />
                </Box>
                <Box>
                    <Link href="tel:+8801552938771">
                        <a>
                            <Typography variant="body1" component="p">
                                0306-4594911
                            </Typography>
                        </a>
                    </Link>
                </Box>
            </Stack>
            <Stack direction="row" sx={styles.Social}>
                <Link href="https://github.com/talhashahzad1">
                    <a target="_blank">
                        <ButtonBase>
                            <GitHubIcon />
                        </ButtonBase>
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/talha-bin-yahya/">
                    <a target="_blank">
                        <ButtonBase>
                            <LinkedInIcon />
                        </ButtonBase>
                    </a>
                </Link>
              
                <Link href="">
                    <a target="_blank">
                        <ButtonBase>
                            <BehaceIcon />
                        </ButtonBase>
                    </a>
                </Link>
            </Stack>
        </Box>
    );
};
export default FooterOne;