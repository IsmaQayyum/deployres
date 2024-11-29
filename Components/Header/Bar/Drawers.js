import { Box, Stack, Typography, ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import PlaceIcon from '@mui/icons-material/Place';
//Icons
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import {  PhoneIcon, FacebookIcon, TwitterIcon, BehaceIcon } from "Utilis/Icons";

//Logo
import Logo from "Assets/header/logo.png";

//Data
import Navs from "Data/Header/Navs.data";

//Styles
import styles from "Styles/Header/Dialogs.styles";

const Drawers = ({ toggleDrawer }) => {
    return (
        <Box>
            <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box sx={{ flex: 1, mt: "5px" }}>
                   <h4>Codified Labs</h4>
                </Box>
                <ButtonBase onClick={toggleDrawer(false)} sx={styles.CrossButton}>
                    <CloseRoundedIcon />
                </ButtonBase>
            </Stack>
            <Typography variant="body1" component="p" sx={styles.Description}>
            Codified Labs is a well-recognized global software services provider. We have matured into a mid-sized, ISO-certified IT company delivering innovative business solutions and technology services across multiple domains.

In addition, we have developed a full-fledged offshore outsourcing division to provide IT services to clients worldwide through dedicated resources.
            </Typography>
            <Box sx={styles.Navs}>
                {Navs &&
                    Navs.map((nav, i) => (
                        <Scroll
                            key={i}
                            activeClass='active'
                            to={nav.Id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={toggleDrawer(false)}
                        >
                            <ButtonBase sx={styles.Buttons}>
                                {nav.name}
                            </ButtonBase>
                        </Scroll>
                    ))
                }
            </Box>
            <Stack direction="row" sx={styles.Address}>
                <Box>
                    <PlaceIcon  />
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
                    <Link href="mailto:info@codestation21.com">
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
                    <LocalPhoneIcon  />
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
                <Link href="https://twitter.com/codestation21">
                    <a target="_blank">
                        <ButtonBase>
                            <TwitterIcon />
                        </ButtonBase>
                    </a>
                </Link>
               
            </Stack>
        </Box >
    );
};
export default Drawers;