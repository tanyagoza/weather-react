
const Form = ({setCity}) => {

    const handleClickGetWeather = e =>{
        e.preventDefault();
        const city = e.target.city.value.trim();
        setCity(city);

    }
    return (
        <form onSubmit={handleClickGetWeather}>
            <input type={'text'} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;