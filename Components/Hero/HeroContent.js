import { Box, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-scroll";

// Icons
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

//Styles
import styles from "Styles/Hero/HeroContent.styles";

const HeroContent = () => {
    return (
        <Box sx={styles.Container}>
            <Typography variant="h2" component="h2" sx={styles.Title}>
                We are <br />
                Codified Labs
            </Typography>
            <Typography variant="h6" component="h6" sx={styles.Slogan}>
                Your Dream, We Build
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Description}>
            Our professional team is ready to provide you with the high-quality web solutions and bring your innovative ideas to life. Codified Labs is using the most modern and most demanded technologies to create an outstanding product.
            </Typography>
            <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
            >
                <ButtonBase sx={styles.Button}>
                    See Projects
                    <ArrowForwardTwoToneIcon />
                </ButtonBase>
            </Link>
        </Box>
    );
};
export default HeroContent;