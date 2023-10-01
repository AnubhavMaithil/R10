import style from "./style.module.css";

const index = ({ project, index, setModal }) => {
    var { name, description } = project;
    return (
        <div
            className={style.project}
            onMouseEnter={() => {
                setModal({ active: true, index: index });
            }}
            onMouseleave={() => {
                setModal({ active: false, index: index });
            }}
        >
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    );
};

export default index;
