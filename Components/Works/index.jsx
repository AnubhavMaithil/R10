import style from "./style.module.css";
import Image from "next/image";

import Project from "./Project";
import Modal from "./Modal";
import { useState } from "react";

const Projects = [
    {
        name: "Project 1",
        description: "Description 1",
        color: "#dadada",
        img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    },
    {
        name: "Project 1",
        description: "Description 1",
        color: "#000000",
        img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    },
    {
        name: "Project 1",
        description: "Description 1",
        color: "#ebebeb",
        img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    },
    {
        name: "Project 1",
        description: "Description 1",
        color: "#5e5e5e",
        img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    },
];

const index = () => {
    const [modal, setModal] = useState({ active: false, index: 0 });
    return (
        <div className={style.works}>
            <h1>Projects Section</h1>
            <div className={style.projects}>
                {Projects.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            project={project}
                            index={index}
                            setModal={setModal}
                        />
                    );
                })}
            </div>
            <Modal projects={Projects} modal={modal} />
        </div>
    );
};

export default index;
