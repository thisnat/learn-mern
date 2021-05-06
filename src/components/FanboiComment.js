const FanboiComment = (props) => {

    return (
        <div className="bg-white mx-48 mb-5 p-10 rounded-xl shadow-lg">
            <p>
                {
                    props.data.bumped === true
                    ? <span className="px-2 py-1 bg-gray-200 rounded-lg mr-3">🙌 {props.data.number}</span> 
                    : <span className="px-2 py-1 bg-gray-200 rounded-lg mr-3">{props.data.number}</span> 
                }
                <span className="px-2 py-1 bg-gray-200 rounded-lg mr-3">
                    {props.data.name}
                </span> 
                <span className="px-2 py-1 bg-gray-200 rounded-lg mr-3">
                    id : {props.data.ident}
                </span>  
                <span className="px-2 py-1 bg-gray-200 rounded-lg mr-3 float-right">
                    {props.data.created_at}
                </span>     
            </p>
            <p className="mt-5 font-thai">{props.data.body}</p>
        </div>
    );
};

export default FanboiComment;