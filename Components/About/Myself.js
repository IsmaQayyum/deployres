import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import { Link } from "react-scroll";

//Icons
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Images
import AboutImage from "Assets/about/about.png";

//Styles
import styles from "Styles/About/Myselft.styles";

const Myself = () => {
    return (
        <Box sx={styles.Container} >
            <Box sx={{ width: { md: "35%", xxs: "100%" } }}>
                <Typography variant="h4" component="h4" sx={styles.Title}>
                    Let&apos;s Something <br />
                    Know Great About Us
                </Typography>
                <Typography variant="body1" component="p" className="sdjh" sx={styles.Description}>
                Our Web Development service offers comprehensive solutions to build robust, scalable, and dynamic web applications. We leverage the latest technologies to ensure your website not only looks great but also performs seamlessly across all devices.
                </Typography>
                <Box sx={{ my: "28px" }}>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                           Custom Website Design
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                         Responsive Design
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                           E-commerce Integration
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={styles.Features}>
                        <DoneIcon />
                        <Typography variant="body1" component="p">
                        Maintenance & Support
                        </Typography>
                    </Stack>
                </Box>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <ButtonBase sx={styles.Button}>
                        Contact Us
                        <ArrowForwardTwoToneIcon />
                    </ButtonBase>
                </Link>
            </Box>
            <Box component="img" src={AboutImage} alt="About" sx={styles.Image} />
        </Box>
    );
};
export default Myself;
