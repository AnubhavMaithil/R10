import style from "./style.module.css";

import Button from "../Button";

const index = () => {
    return (
        <div className={style.section}>
            <div className={style.left}>
                <p>
                    Helping brands to stand out in the digital era. Together we
                    will set the new status quo. No nonsense, always on the
                    cutting edge.
                </p>
            </div>
            <div className={style.right}>
                <p>
                    The combination of my passion for design, code & interaction
                    positions me in a unique place in the web design world.
                </p>
                <Button
                    text="Contact me"
                    attributes={{
                        width: "150px",
                        height: "150px",
                        border: "none",
                    }}
                />
            </div>
        </div>
    );
};

export default index;
