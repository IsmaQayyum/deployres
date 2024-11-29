import { Box } from "@mui/material";
import Image from "next/image";
import { Link } from "react-scroll";



const Logo = () => {
    return (
        <Box sx={{ mt: "2px", a: { cursor: "pointer" } }}>
            <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
            >
<h1>Codified Labs</h1>

            </Link>
        </Box>
    );
};
export default Logo;