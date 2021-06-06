import './Button.css';
function Button(props)
{
    return(
        <div>
            <button class="btn">{props.title}</button>
        </div>
    );
}
export default Button;