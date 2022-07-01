import Link from "next/link";
import { siteName } from "../../../lib/constants/site";
import Container from "../../atoms/Container/Container";

import styles from "./Header.module.scss";

const Header = () => (
  <Container>
    <Link href="/">
      <a className={styles.Header}>
        The <mark>console.blog()</mark>
      </a>
    </Link>
  </Container>
);

export default Header;
