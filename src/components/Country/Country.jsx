import './Country.css'


const Country = (props) => {
    return (
        <div className='country'>
            <img src={props.flags} alt="" width={"150px"} />
            <h3> {props.name}</h3>
            <h5>Capital: {props.capital} </h5>
            <p>Population: {props.population}</p>
            <p>Area: {props.area} </p>
        </div>
    );
};

export default Country;