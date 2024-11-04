function Partner(props) {

  return (
    <div className="partner-list">
                    {
            props.partnerList.map( (item, index) => {
                return (
                    <div className="kartu-partner" key={index}>
                        <img src={item.images}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Partner