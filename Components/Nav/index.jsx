import styles from "./style.module.css";

const index = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <div className={styles.copy}>©</div>
                <div className={styles.name}>
                    <p>Code by Anubhav | Sheryians</p>
                </div>
            </div>
            <ul className={styles.links}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default index;
