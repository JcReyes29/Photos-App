function Image({ photo: { farm, server, id, secret, title } }) {
    
    return (
        <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`} alt={title} />

    )
}

export default Image