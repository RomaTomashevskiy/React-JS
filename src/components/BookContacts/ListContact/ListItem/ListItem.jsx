import './index.css'

const ListItem = ({  contacts , deleteContact }) => (contacts.map(({ id, name, number }) => {
    return <li key={id} className='item'>
        <p className='text'>{name}: {number}</p>

        <button type='button' className='list_btn' onClick={() => deleteContact(id)}>Delete</button>
    </li>
}));



export default ListItem;