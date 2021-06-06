import './TextField.css';
function TextField(props)
{

    return(
        <div>
            <p>{props.title}</p>
            <input type="text" class="textfield"/>
        </div>
    );
}
export default TextField;