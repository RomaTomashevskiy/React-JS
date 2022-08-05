import './index.css'

function Filter({onChange , value}){

    return (
        <form action="">
            <label htmlFor="" className="filter_label">
                Find Contacts by name
                <input
                    value={value}
                    onChange={onChange}
                    className="filter_input"
                    type="text" />
            </label>
        </form>
    )
};

export default Filter;