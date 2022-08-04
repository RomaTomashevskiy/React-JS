import ListItem from "./ListItem";

function ListContact({contacts , deleteContact}) {
    return <ul>
        <ListItem contacts={contacts} deleteContact={deleteContact} />
    </ul>
};


export default ListContact;