import classNames from "classnames";
import styles from "./Container.module.scss";
type PropTypes = { children: React.ReactNode; className?: string };

const Container = ({ children, className }: PropTypes) => (
  <div className={classNames(styles.Container, className)}>{children}</div>
);

export default Container;
