import style from "./style.module.css";
import Image from "next/image";

import { motion } from "framer-motion";

const animateVarients = {
    open: {
        opacity: 0,
    },
    animation: {
        opacity: 1,
    },
    close: {
        opacity: 0,
    },
};

const index = ({ projects, modal }) => {
    const { active, index } = modal;

    return (
        <motion.div
            className={style.modalContainer}
            variants={animateVarients}
            initial="open"
            animate="animation"
            exit="close"
        >
            <div
                className={style.sliderComponent}
                style={{ top: index * -100 + "%" }}
            >
                {projects.map((project, index) => {
                    return (
                        <div
                            className={style.slide}
                            style={{ backgroundColor: project.color }}
                            key={index}
                        >
                            <Image
                                src={project.img}
                                width={300}
                                height={200}
                                alt="some image"
                            />
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default index;
