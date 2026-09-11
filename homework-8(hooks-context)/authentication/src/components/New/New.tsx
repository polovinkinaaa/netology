import type {NewType} from "../../types.ts";

function New({ id, title, image, content }: NewType) {
    return (
        <div className={`new_${id}`}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}
export default New;