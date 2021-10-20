export default function Circle({ number, onTempChange }) {
    function handleChange(e) {
        onTempChange(e.target.value) 
    }
    return (
        <button className={`circle color-${number}`} value={number} onClick={handleChange}  >{number}</button>
    )
}